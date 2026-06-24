'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')

  return (
    <div style={{minHeight:'100vh',background:'#F0FBF7',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
      <div style={{width:'100%',maxWidth:'380px'}}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <Link href="/" style={{display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'inherit',marginBottom:'1.5rem'}}>
            <div style={{width:'32px',height:'32px',background:'#00A86B',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:600}}>ر</div>
            <span style={{fontWeight:600,fontSize:'18px'}}>Raddad</span>
          </Link>
          <h1 style={{fontSize:'22px',fontWeight:600,marginBottom:'6px'}}>Welcome back</h1>
          <p style={{color:'#5a7a6e',fontSize:'14px'}}>Sign in to your dashboard</p>
        </div>
        <div style={{background:'white',border:'1px solid #d4ede4',borderRadius:'14px',padding:'1.5rem'}}>
          <div style={{marginBottom:'14px'}}>
            <label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Email</label>
            <input type="email" placeholder="you@business.com" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none'}}/>
          </div>
          <button onClick={()=>window.location.href='/dashboard'} style={{width:'100%',background:'#00A86B',color:'white',border:'none',padding:'12px',borderRadius:'10px',fontSize:'15px',fontWeight:500,cursor:'pointer'}}>
            Sign in →
          </button>
          <p style={{textAlign:'center',fontSize:'13px',color:'#5a7a6e',marginTop:'1rem'}}>
            No account? <Link href="/signup" style={{color:'#00A86B'}}>Start free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
