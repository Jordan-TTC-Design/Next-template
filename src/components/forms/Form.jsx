import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '@/components/common/controls/Input'
import Button from '@/components/atoms/Button'

const schema = yup.object().shape({
  name: yup.string().required('姓名為必填'),
  email: yup.string().email('請輸入有效的電子郵件').required('電子郵件為必填'),
  password: yup
    .string()
    .min(6, '密碼至少需要 6 個字符')
    .required('密碼為必填'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '密碼必須匹配')
    .required('請確認密碼')
})

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">註冊表單</h2>
      
      <div className="space-y-4">
        <Input
          label="姓名"
          {...register('name')}
          error={errors.name?.message}
        />

        <Input
          label="電子郵件"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="密碼"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />

        <Input
          label="確認密碼"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="mt-6 flex gap-4">
        <Button type="submit" variant="primary">
          提交
        </Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={() => reset()}
        >
          重置
        </Button>
      </div>
    </form>
  )
} 