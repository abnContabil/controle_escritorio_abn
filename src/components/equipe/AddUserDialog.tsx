import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from '@/lib/supabase/client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  role: z.string().min(1, 'Selecione um perfil'),
  company_id: z.string().min(1, 'Selecione uma empresa'),
})

type FormValues = z.infer<typeof schema>

export function AddUserDialog({
  open,
  onOpenChange,
  companies,
  onSuccess,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  companies: any[]
  onSuccess: (companyId: string) => void
}) {
  const [loading, setLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', role: '', company_id: '' },
  })

  useEffect(() => {
    if (open) {
      form.reset({ email: '', role: '', company_id: '' })
    }
  }, [open, form])

  const onSubmit = async (values: FormValues) => {
    setLoading(true)
    try {
      const { error } = await supabase.rpc('abn_add_company_user', {
        p_company_id: values.company_id,
        p_email: values.email,
        p_role: values.role,
      })

      if (error) {
        console.error(error)
        if (error.message.includes('Usuário ainda não existe')) {
          toast({
            title: 'Usuário não encontrado',
            description:
              'Usuário ainda não existe. Cadastre primeiro no Supabase Authentication ou implemente convite por e-mail.',
            variant: 'destructive',
          })
        } else if (error.message.includes('já está vinculado')) {
          toast({
            title: 'Usuário já vinculado',
            description: 'Este usuário já faz parte da equipe desta empresa.',
            variant: 'destructive',
          })
        } else {
          toast({
            title: 'Erro ao adicionar',
            description: 'Não foi possível adicionar o usuário. Verifique o console.',
            variant: 'destructive',
          })
        }
        return
      }

      toast({ title: 'Sucesso', description: 'Usuário adicionado à equipe.' })
      onSuccess(values.company_id)
      onOpenChange(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar usuário</DialogTitle>
          <DialogDescription>
            Vincule um usuário existente à equipe de uma empresa.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="company_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma empresa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {companies.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.razao_social}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="usuario@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Perfil</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um perfil" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="proprietario">Proprietário</SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="contador">Contador</SelectItem>
                      <SelectItem value="auxiliar">Auxiliar</SelectItem>
                      <SelectItem value="visualizador">Visualizador</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-700 hover:bg-blue-800 text-white"
              >
                {loading ? 'Adicionando...' : 'Adicionar'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
