import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='py-20 mx-10'>{children}</body>
    </html>
  )
}
