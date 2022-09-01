import React from 'react'

export default function SidebarMenuItem({text, Icon}) {
  return (
    <div className="hoverEffect flex items-center text-gray-700">
      <Icon className="h-7" />
      <span>{text}</span>
    </div>
  )
}
