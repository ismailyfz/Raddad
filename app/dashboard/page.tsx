'use client'
export default function Dashboard() {
  return (
    <div style={{minHeight:'100vh',background:'#F0FBF7'}}>
      <nav style={{background:'white',borderBottom:'1px solid #d4ede4',padding:'0 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',height:'56px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <div style={{width:'28px',height:'28px',background:'#00A86B',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:600}}>ر</div>
          <span style={{fontWeight:600}}>Raddad</span>
        </div>
        <button onClick={()=>window.location.href='/'} style={{fontSize:'13px',color:'#5a7a6e',background:'none',border:'none',cursor:'pointer'}}>Sign out</button>
      </nav>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'2rem 1.5rem'}}>
        <div style={{background:'#E6F7F1',border:'1px solid #00A86B',borderRadius:'12px',padding:'14px 18px',marginBottom:'1.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'10px'}}>
          <div>
            <div style={{fontWeight:500,color:'#085041'}}>Welcome to Raddad!</div>
            <div style={{fontSize:'13px',color:'#0F6E56'}}>Follow the steps below to connect your WhatsApp and go live.</div>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'12px',marginBottom:'2rem'}}>
          {[['💬','0','Messages answered'],['📅','0','Bookings made'],['🟢','24/7','Always online'],['⏳','14','Trial days left']].map(([icon,n,l],i)=>(
            <div key={i} style={{background:'white',border:'1px solid #d4ede4',borderRadius:'12px',padding:'1.25rem',textAlign:'center'}}>
              <div style={{fontSize:'24px',marginBottom:'4px'}}>{icon}</div>
              <div style={{fontSize:'28px',fontWeight:600,color:'#00A86B'}}>{n}</div>
              <div style={{fontSize:'12px',color:'#5a7a6e',marginTop:'2px'}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{background:'white',border:'1px solid #d4ede4',borderRadius:'14px',padding:'1.5rem'}}>
          <div style={{fontWeight:500,fontSize:'16px',marginBottom:'4px'}}>Connect your WhatsApp</div>
          <div style={{fontSize:'13px',color:'#5a7a6e',marginBottom:'1rem'}}>Follow these steps to go live in 10 minutes.</div>
          {[
            ['1','Create a free Twilio account at twilio.com'],
            ['2','Go to Messaging → Try WhatsApp → Activate sandbox'],
            ['3','Send "join [word]" from your WhatsApp to +1 415 523 8886'],
            ['4','Set webhook URL to: getraddad.com/api/whatsapp'],
            ['5','Done — Raddad starts replying to your customers automatically'],
          ].map(([n,t])=>(
            <div key={n} style={{display:'flex',gap:'10px',alignItems:'flex-start',marginBottom:'10px'}}>
              <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'#00A86B',color:'white',fontSize:'11px',fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:'1px'}}>{n}</div>
              <div style={{fontSize:'13px',color:'#5a7a6e',lineHeight:1.5}}>{t as string}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
