import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '@/components/commons/controls/Input'
import Button from '@/components/atoms/Button'

const schema = yup.object().shape({
  name: yup.string().required('姓名為必填'),
  email: yup.string().email('請輸入有效的電子郵件').required('電子郵件為必填'),
  phone: yup.string().matches(/^[0-9]{10}$/, '請輸入有效的手機號碼'),
  message: yup.string().required('訊息為必填').min(10, '訊息至少需要 10 個字符')
})

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      // 這裡可以加入 API 調用
      console.log('表單數據:', data)
      // 模擬 API 調用延遲
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('表單已成功提交！')
      reset()
    } catch (error) {
      console.error('提交失敗:', error)
      alert('提交失敗，請稍後再試')
    }
  }

  return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">聯絡我們</h2>
          <p className="mt-2 text-gray-600">有任何問題或建議，歡迎與我們聯繫</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="姓名"
              {...register('name')}
              error={errors.name?.message}
              placeholder="請輸入您的姓名"
            />

            <Input
              label="電子郵件"
              type="email"
              {...register('email')}
              error={errors.email?.message}
              placeholder="請輸入您的電子郵件"
            />
          </div>

          <Input
            label="手機號碼"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="請輸入您的手機號碼"
          />

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              訊息
            </label>
            <textarea
              {...register('message')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.message ? 'border-red-500' : ''
              }`}
              rows="5"
              placeholder="請輸入您的訊息"
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit" 
              variant="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : '提交'}
            </Button>
          </div>
        </form>
      </div>
  )
} 