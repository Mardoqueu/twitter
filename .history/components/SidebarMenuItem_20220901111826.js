import React from 'react'

export default function SidebarMenuItem({text, Icon}) {
  return (
    <div className="hoverEffect flex items-center">
      <Icon className="h-7" />
      <span>{text}</span>
    </div>
  )
}
