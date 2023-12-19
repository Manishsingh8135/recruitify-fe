const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex w-full justify-center align-middle  my-auto">
        {children}
      </div>
    )
  }
  
  export default Layout