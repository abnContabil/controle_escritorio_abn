import { useState, useRef, useCallback } from 'react'
import { Upload, FileText, CheckCircle2, AlertTriangle, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { importXmlTexto } from '@/hooks/use-xml-control'

interface XmlImportDialogProps {
  open: boolean
  onClose: () => void
  companyId: string
  onComplete: () => void
}

type FileStatus = 'pending' | 'processing' | 'imported' | 'duplicate' | 'error'
interface FileItem {
  name: string
  status: FileStatus
  error?: string
}

export function XmlImportDialog({ open, onClose, companyId, onComplete }: XmlImportDialogProps) {
  const [files, setFiles] = useState<FileItem[]>([])
  const [processing, setProcessing] = useState(false)
  const [done, setDone] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback(
    async (fileList: FileList) => {
      const xmlFiles = Array.from(fileList).filter((f) => f.name.toLowerCase().endsWith('.xml'))
      if (xmlFiles.length === 0) return
      setFiles(xmlFiles.map((f) => ({ name: f.name, status: 'pending' as FileStatus })))
      setProcessing(true)
      setDone(false)

      for (let i = 0; i < xmlFiles.length; i++) {
        setFiles((prev) => prev.map((f, idx) => (idx === i ? { ...f, status: 'processing' } : f)))
        try {
          const text = await xmlFiles[i].text()
          const result = await importXmlTexto(companyId, xmlFiles[i].name, text)
          const status: FileStatus = result.imported
            ? 'imported'
            : result.duplicate
              ? 'duplicate'
              : 'error'
          setFiles((prev) =>
            prev.map((f, idx) =>
              idx === i ? { ...f, status, error: result.error || undefined } : f,
            ),
          )
        } catch {
          setFiles((prev) =>
            prev.map((f, idx) =>
              idx === i ? { ...f, status: 'error', error: 'Falha ao ler arquivo' } : f,
            ),
          )
        }
      }
      setProcessing(false)
      setDone(true)
      onComplete()
    },
    [companyId, onComplete],
  )

  const handleClose = () => {
    if (!processing) {
      setFiles([])
      setDone(false)
      onClose()
    }
  }

  const imported = files.filter((f) => f.status === 'imported').length
  const duplicates = files.filter((f) => f.status === 'duplicate').length
  const errors = files.filter((f) => f.status === 'error').length
  const currentIdx = files.findIndex((f) => f.status === 'processing')
  const progress = files.length > 0 ? ((imported + duplicates + errors) / files.length) * 100 : 0

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Importar XML</DialogTitle>
          <DialogDescription>
            Selecione um ou mais arquivos XML (NF-e, NFC-e, CT-e, NFS-e).
          </DialogDescription>
        </DialogHeader>
        <input
          ref={inputRef}
          type="file"
          accept=".xml"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
        />
        {files.length === 0 ? (
          <div
            onClick={() => inputRef.current?.click()}
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-sm font-medium">Clique para selecionar arquivos XML</p>
            <p className="text-xs text-muted-foreground mt-1">NF-e, NFC-e, CT-e e NFS-e</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {processing && currentIdx >= 0
                  ? `Processando: ${files[currentIdx].name}`
                  : done
                    ? 'Importação concluída'
                    : 'Aguardando...'}
              </span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-emerald-500/10 p-2">
                <p className="text-xs text-muted-foreground">Importados</p>
                <p className="text-lg font-bold text-emerald-700">{imported}</p>
              </div>
              <div className="rounded-md bg-amber-500/10 p-2">
                <p className="text-xs text-muted-foreground">Duplicados</p>
                <p className="text-lg font-bold text-amber-700">{duplicates}</p>
              </div>
              <div className="rounded-md bg-destructive/10 p-2">
                <p className="text-xs text-muted-foreground">Erros</p>
                <p className="text-lg font-bold text-destructive">{errors}</p>
              </div>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-1">
              {files.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs py-1">
                  {f.status === 'imported' && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  )}
                  {f.status === 'duplicate' && <Copy className="h-4 w-4 text-amber-600 shrink-0" />}
                  {f.status === 'error' && (
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
                  )}
                  {f.status === 'processing' && (
                    <FileText className="h-4 w-4 text-blue-600 shrink-0 animate-pulse" />
                  )}
                  {f.status === 'pending' && (
                    <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                  <span className="truncate flex-1">{f.name}</span>
                  {f.status === 'error' && f.error && (
                    <span className="text-destructive truncate">{f.error}</span>
                  )}
                </div>
              ))}
            </div>
            {done && (
              <Button onClick={handleClose} className="w-full">
                Fechar
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
