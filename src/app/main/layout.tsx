export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <div className=''>
              {/* Div Background */}
              {children}
          </div>
        </>
    )
  }