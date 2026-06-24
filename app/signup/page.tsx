'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({name:'',email:'',whatsapp:'',industry:'',description:'',prices:'',hours:'',location:''})
  const update = (k:string,v:string) => setForm(prev=>({...prev,[k]:v}))

  return (
    <div style={{minHeight:'100vh',background:'#F0FBF7',display:'flex',flexDirection:'column'}}>
      <nav style={{background:'white',borderBottom:'1px solid #d4ede4',padding:'0 2rem',display:'flex',alignItems:'center',height:'60px'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none',color:'inherit'}}>
          <div style={{width:'28px',height:'28px',background:'#00A86B',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:600}}>ر</div>
          <span style={{fontWeight:600}}>Raddad</span>
        </Link>
      </nav>
      <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
        <div style={{width:'100%',maxWidth:'420px'}}>
          <div style={{textAlign:'center',marginBottom:'2rem'}}>
            <h1 style={{fontSize:'22px',fontWeight:600,marginBottom:'6px'}}>Start for free</h1>
            <p style={{color:'#5a7a6e',fontSize:'14px'}}>No credit card needed</p>
          </div>
          <div style={{display:'flex',gap:'6px',marginBottom:'1.5rem'}}>
            {[1,2,3].map(i=>(
              <div key={i} style={{flex:1,height:'4px',borderRadius:'2px',background:i<=step?'#00A86B':'#d4ede4'}}/>
            ))}
          </div>
          <div style={{background:'white',border:'1px solid #d4ede4',borderRadius:'14px',padding:'1.5rem'}}>
            {step===1&&(
              <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Business name</label><input style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none'}} placeholder="Al Asala Restaurant" value={form.name} onChange={e=>update('name',e.target.value)}/></div>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Industry</label>
                  <select style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none',background:'white'}} value={form.industry} onChange={e=>update('industry',e.target.value)}>
                    <option value="">Select industry</option>
                    <option>Restaurant / Cafe</option><option>Clinic / Healthcare</option><option>Real Estate</option><option>Gym / Fitness</option><option>Salon / Beauty</option><option>Retail</option><option>Logistics / Transport</option>
                  </select>
                </div>
                <button onClick={()=>setStep(2)} disabled={!form.name||!form.industry} style={{background:'#00A86B',color:'white',border:'none',padding:'12px',borderRadius:'10px',fontSize:'15px',fontWeight:500,cursor:'pointer',opacity:(!form.name||!form.industry)?0.5:1}}>Continue →</button>
              </div>
            )}
            {step===2&&(
              <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Email</label><input type="email" style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none'}} placeholder="you@business.com" value={form.email} onChange={e=>update('email',e.target.value)}/></div>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>WhatsApp number</label><input style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none'}} placeholder="+971 50 000 0000" value={form.whatsapp} onChange={e=>update('whatsapp',e.target.value)}/></div>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Opening hours</label><input style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none'}} placeholder="Daily 9am–10pm" value={form.hours} onChange={e=>update('hours',e.target.value)}/></div>
                <div style={{display:'flex',gap:'10px'}}>
                  <button onClick={()=>setStep(1)} style={{flex:1,background:'transparent',color:'#00A86B',border:'1.5px solid #00A86B',padding:'12px',borderRadius:'10px',fontSize:'14px',fontWeight:500,cursor:'pointer'}}>Back</button>
                  <button onClick={()=>setStep(3)} disabled={!form.email||!form.whatsapp} style={{flex:2,background:'#00A86B',color:'white',border:'none',padding:'12px',borderRadius:'10px',fontSize:'14px',fontWeight:500,cursor:'pointer',opacity:(!form.email||!form.whatsapp)?0.5:1}}>Continue →</button>
                </div>
              </div>
            )}
            {step===3&&(
              <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Your prices / menu</label><textarea style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none',resize:'none'}} rows={2} placeholder="Kabsa 45 SAR, Mandi 55 SAR..." value={form.prices} onChange={e=>update('prices',e.target.value)}/></div>
                <div><label style={{fontSize:'13px',fontWeight:500,color:'#5a7a6e',display:'block',marginBottom:'6px'}}>Location</label><input style={{width:'100%',border:'1px solid #d4ede4',borderRadius:'10px',padding:'11px 14px',fontSize:'14px',outline:'none'}} placeholder="Al Nuzha, Riyadh" value={form.location} onChange={e=>update('location',e.target.value)}/></div>
                <div style={{display:'flex',gap:'10px'}}>
                  <button onClick={()=>setStep(2)} style={{flex:1,background:'transparent',color:'#00A86B',border:'1.5px solid #00A86B',padding:'12px',borderRadius:'10px',fontSize:'14px',fontWeight:500,cursor:'pointer'}}>Back</button>
                  <button onClick={()=>window.location.href='/dashboard'} style={{flex:2,background:'#00A86B',color:'white',border:'none',padding:'12px',borderRadius:'10px',fontSize:'14px',fontWeight:500,cursor:'pointer'}}>Launch Raddad →</button>
                </div>
              </div>
            )}
          </div>
          <p style={{textAlign:'center',fontSize:'13px',color:'#5a7a6e',marginTop:'1rem'}}>
            Already have an account? <Link href="/login" style={{color:'#00A86B'}}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
