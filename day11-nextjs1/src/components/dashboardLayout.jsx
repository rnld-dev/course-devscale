export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
        <aside className=" w-[220px] bg-slate-100 p-6 border-r border-slate-200">
            <div>Dashboard</div>
            <div>Course</div>
            <div>Resources</div>
        </aside>
        <main className="w-[calc(100vw - 220px)] p-6">{children}</main>
        {/* yg jadi children akan merubah yang ada di page.js */}
    </div>
  )
}
