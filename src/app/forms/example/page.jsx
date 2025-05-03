'use client'

import { useState } from 'react'
import Controls from '@/components/common/forms/Controls'

export default function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    message: '',
    birthDate: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // 清除該欄位的錯誤
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }))
    }
  }

  const handleBlur = (field) => {
    // 簡單的驗證邏輯
    if (formData[field] === '') {
      setErrors(prev => ({
        ...prev,
        [field]: '此欄位為必填'
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 表單提交邏輯
    console.log('表單資料：', formData)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">表單範例</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 文字輸入框 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
            <Controls
              name="name"
              placeholder="請輸入姓名"
              value={formData.name}
              onChange={handleChange('name')}
              onBlur={() => handleBlur('name')}
              required
              error={errors.name}
              icon="user"
              inputSize="sm"
            />
          </div>

          {/* 電子郵件輸入框 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">電子郵件</label>
            <Controls
              type="email"
              name="email"
              placeholder="請輸入電子郵件"
              value={formData.email}
              onChange={handleChange('email')}
              onBlur={() => handleBlur('email')}
              required
              error={errors.email}
              icon="mail"
            />
          </div>

          {/* 密碼輸入框 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">密碼</label>
            <Controls
              type="password"
              name="password"
              placeholder="請輸入密碼"
              value={formData.password}
              onChange={handleChange('password')}
              onBlur={() => handleBlur('password')}
              required
              error={errors.password}
            />
          </div>

          {/* 電話輸入框 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">電話</label>
            <Controls
              type="tel"
              name="phone"
              placeholder="請輸入電話"
              value={formData.phone}
              onChange={handleChange('phone')}
              onBlur={() => handleBlur('phone')}
              inputmode="tel"
              icon="phone"
            />
          </div>

          {/* 性別選擇 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">性別</label>
            <Controls
              type="select"
              name="gender"
              placeholder="請選擇性別"
              value={formData.gender}
              onChange={handleChange('gender')}
              onBlur={() => handleBlur('gender')}
              required
              error={errors.gender}
              options={[
                { value: 'male', label: '男' },
                { value: 'female', label: '女' },
                { value: 'other', label: '其他' }
              ]}
            />
          </div>

          {/* 生日選擇 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">生日</label>
            <Controls
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange('birthDate')}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* 訊息輸入框 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">訊息</label>
            <Controls
              type="textarea"
              name="message"
              placeholder="請輸入訊息"
              value={formData.message}
              onChange={handleChange('message')}
              onBlur={() => handleBlur('message')}
              required
              error={errors.message}
            />
          </div>

          {/* 提交按鈕 */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              提交
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 