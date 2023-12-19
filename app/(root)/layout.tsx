
import Navbarr from "@/components/shared/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbarr />
      <main className="flex-1">{children}</main>
      
    </div>
  )
}
