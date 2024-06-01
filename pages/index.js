import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <body style="margin:0px;padding:0px;overflow:hidden">
        <iframe src="https://itch.io/embed-upload/10556791?color=101010" allowfullscreen='' frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>
      </body>
    </div>
  )
}
