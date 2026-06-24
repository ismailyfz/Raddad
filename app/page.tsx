'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#F0FBF7'}}>
      <nav style={{background:'white',borderBottom:'1px solid #d4ede4',padding:'0 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',height:'60px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{width:'32px',height:'32px',background:'#00A86B',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:600,fontSize:'16px'}}>ر</div>
          <span style={{fontWeight:600,fontSize:'18px'}}>Raddad</span>
        </div>
        <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <Link href="/signup" style={{background:'#00A86B',color:'white',padding:'8px 18px',borderRadius:'8px',fontSize:'14px',fontWeight:500,textDecoration:'none'}}>Start free</Link>
        </div>
      </nav>
      <div style={{maxWidth:'680px',margin:'0 auto',padding:'5rem 2rem 3rem',textAlign:'center'}}>
        <h1 style={{fontSize:'48px',fontWeight:600,lineHeight:1.1,letterSpacing:'-1.5px',marginBottom:'1.2rem',color:'#0a1628'}}>
          Your business<br /><span style={{color:'#00A86B'}}>never sleeps.</span>
        </h1>
        <p style={{fontSize:'17px',color:'#5a7a6e',lineHeight:1.6,marginBottom:'2.5rem',maxWidth:'520px',margin:'0 auto 2.5rem'}}>
          Raddad answers every WhatsApp message automatically — in Arabic and English, 24/7. Books appointments, sends quotes, follows up leads.
        </p>
        <Link href="/signup" style={{background:'#00A86B',color:'white',padding:'14px 32px',borderRadius:'10px',fontSize:'16px',fontWeight:500,textDecoration:'none'}}>Start free trial →</Link>
        <p style={{fontSize:'12px',color:'#5a7a6e',marginTop:'1rem'}}>Free plan available · No credit card · Setup in 10 minutes</p>
      </div>
    </div>
  )
}
