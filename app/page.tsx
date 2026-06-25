'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [typed, setTyped] = useState('unanswered messages.')

  useEffect(() => {
    const phrases = ['unanswered messages.', 'missed bookings.', 'slow replies.', 'lost customers.']
    let pi = 0, ci = 0, del = false
    const tick = () => {
      const p = phrases[pi]
      if (!del) {
        ci++
        setTyped(p.slice(0, ci))
        if (ci === p.length) { del = true; setTimeout(tick, 1800); return }
      } else {
        ci--
        setTyped(p.slice(0, ci))
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length }
      }
      setTimeout(tick, del ? 55 : 75)
    }
    const t = setTimeout(tick, 1000)
    return () => clearTimeout(t)
  }, [])

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const answer = e.currentTarget.nextElementSibling as HTMLElement
    if (answer) answer.style.display = answer.style.display === 'block' ? 'none' : 'block'
  }

  const deep = '#0D1F2D'
  const deep2 = '#162533'
  const gold = '#C9992A'
  const goldLight = '#F5E6C0'
  const goldDark = '#8B6A1A'
  const cream = '#FDF8F0'
  const border = '#E8E0D0'
  const text = '#1A1208'
  const textMuted = '#6B5B3E'
  const teal = '#00A86B'

  return (
    <div style={{background:cream,minHeight:'100vh'}}>

      <nav style={{background:deep,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 2rem',height:'64px',position:'sticky',top:0,zIndex:100}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{width:'36px',height:'36px',background:gold,borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',color:deep,fontSize:'18px',fontWeight:500}}>ر</div>
          <span style={{fontSize:'19px',fontWeight:500,color:'white'}}>Raddad</span>
        </div>
        <div style={{display:'flex',gap:'6px',alignItems:'center'}}>
          <Link href="/login" style={{fontSize:'13px',color:'rgba(255,255,255,0.6)',textDecoration:'none',padding:'7px 12px'}}>Sign in</Link>
          <Link href="/signup" style={{background:gold,color:deep,border:'none',padding:'9px 20px',borderRadius:'8px',fontSize:'13px',fontWeight:500,textDecoration:'none'}}>Start free →</Link>
        </div>
      </nav>

      <div style={{background:deep,padding:'5rem 2rem 6rem',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,opacity:0.04,backgroundImage:'repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 50%)',backgroundSize:'20px 20px'}}></div>
        <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(201,153,42,0.15)',color:gold,fontSize:'12px',fontWeight:500,padding:'5px 14px',borderRadius:'100px',marginBottom:'1.5rem',border:'0.5px solid rgba(201,153,42,0.3)',position:'relative'}}>
          🤖 Trusted by 500+ Gulf businesses
        </div>
        <h1 style={{fontSize:'52px',fontWeight:500,lineHeight:1.1,letterSpacing:'-2px',marginBottom:'1.25rem',color:'white',position:'relative'}}>
          Stop losing customers<br/>to <span style={{color:gold}}>{typed}</span>
        </h1>
        <p style={{fontSize:'16px',color:'rgba(255,255,255,0.65)',lineHeight:1.7,marginBottom:'2.5rem',maxWidth:'520px',margin:'0 auto 2.5rem',position:'relative'}}>
          Raddad is an AI employee that answers every WhatsApp message your business receives — instantly, in Arabic and English, 24 hours a day.
        </p>
        <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap',marginBottom:'1.25rem',position:'relative'}}>
          <Link href="/signup" style={{background:gold,color:deep,border:'none',padding:'14px 30px',borderRadius:'10px',fontSize:'15px',fontWeight:500,textDecoration:'none'}}>ابدأ مجاناً — Start free</Link>
          <button style={{background:'transparent',color:'white',border:'1px solid rgba(255,255,255,0.25)',padding:'14px 30px',borderRadius:'10px',fontSize:'15px',cursor:'pointer'}}>Watch 60-sec demo</button>
        </div>
        <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',position:'relative'}}>Free plan · No credit card · Setup in 10 minutes</p>
      </div>

      <div style={{background:deep2,borderBottom:'0.5px solid rgba(255,255,255,0.08)',padding:'1rem 2rem',display:'flex',alignItems:'center',justifyContent:'center',gap:'2rem',flexWrap:'wrap'}}>
        {['Dubai','Riyadh','Abu Dhabi','Jeddah','Doha','Kuwait City','Bahrain'].map(city=>(
          <div key={city} style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',display:'flex',alignItems:'center',gap:'6px'}}>
            <div style={{width:'5px',height:'5px',borderRadius:'50%',background:gold}}></div>{city}
          </div>
        ))}
      </div>

      <div style={{maxWidth:'700px',margin:'0 auto',padding:'4rem 1.5rem 3rem'}}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>See the difference</div>
          <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Every missed message is a lost customer</h2>
          <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,maxWidth:'540px',margin:'0 auto'}}>Gulf customers expect instant replies. Raddad makes sure they always get one.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          {[
            {label:'Without Raddad',labelStyle:{color:'#A32D2D',background:'#FCEBEB'},av:{bg:'#888',text:'م'},name:'مطعم الأصالة',status:'Last seen 3 hours ago',msgs:[{type:'in',text:'كم سعر الكبسة؟ ✓'},{type:'grey',text:'هل عندكم توصيل؟ ✓'},{type:'grey',text:'متى تفتحون؟ ✓'},{type:'grey',text:'ما ردوا علي 😞'}],foot:{style:{color:'#A32D2D',background:'#FCEBEB'},text:'5 messages. Zero replies. Lost forever.'}},
            {label:'With Raddad AI',labelStyle:{color:'#085041',background:'#E6F7F1'},av:{bg:teal,text:'ر'},name:'مطعم الأصالة',status:'Raddad AI · Online 24/7',msgs:[{type:'in',text:'كم سعر الكبسة؟'},{type:'ai',text:'الكبسة 45 ريال مع خبز وسلطة 🍚'},{type:'in',text:'أبي أحجز طاولة لـ 4'},{type:'ai',text:'تم الحجز ✅ 8م لـ 4 أشخاص'}],foot:{style:{color:'#085041',background:'#E6F7F1'},text:'Instant replies. Every customer. 24/7.'}}
          ].map((card,i)=>(
            <div key={i} style={{background:'white',border:`0.5px solid ${border}`,borderRadius:'16px',overflow:'hidden'}}>
              <div style={{padding:'10px 14px',fontSize:'11px',fontWeight:500,textTransform:'uppercase',letterSpacing:'0.8px',...card.labelStyle}}>{card.label}</div>
              <div style={{background:'#075E54',padding:'10px 14px',display:'flex',alignItems:'center',gap:'8px'}}>
                <div style={{width:'28px',height:'28px',borderRadius:'50%',background:card.av.bg,display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'12px',fontWeight:500}}>{card.av.text}</div>
                <div><div style={{fontSize:'12px',color:'white',fontWeight:500}}>{card.name}</div><div style={{fontSize:'10px',color:'rgba(255,255,255,0.7)'}}>{card.status}</div></div>
              </div>
              <div style={{padding:'10px',background:'#E5DDD5',minHeight:'150px',display:'flex',flexDirection:'column',gap:'5px'}}>
                {card.msgs.map((m,mi)=>(
                  <div key={mi} style={{padding:'7px 10px',borderRadius:'0 8px 8px 8px',fontSize:'11px',lineHeight:1.4,maxWidth:'84%',background:m.type==='ai'?'#E8F5E9':'white',borderLeft:m.type==='ai'?`2px solid ${teal}`:'none',color:m.type==='ai'?'#085041':m.type==='grey'?'#aaa':'#333',opacity:m.type==='grey'?0.5:1}}>{m.text}</div>
                ))}
              </div>
              <div style={{padding:'8px 14px',fontSize:'11px',textAlign:'center',fontWeight:500,...card.foot.style}}>{card.foot.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem',textAlign:'center'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>Who we serve</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Built for every Gulf business</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,maxWidth:'540px',margin:'0 auto 2rem'}}>Any business that gets WhatsApp messages from customers can use Raddad.</p>
        <div style={{display:'flex',gap:'8px',flexWrap:'wrap',justifyContent:'center'}}>
          {[['🍽️','Restaurants'],['🏥','Clinics'],['🏢','Real Estate'],['💪','Gyms'],['✂️','Salons'],['🛍️','Retail'],['🚛','Logistics'],['📚','Education']].map(([icon,name])=>(
            <div key={name as string} style={{display:'flex',alignItems:'center',gap:'8px',background:'white',border:`0.5px solid ${border}`,borderRadius:'12px',padding:'10px 16px',fontSize:'13px',fontWeight:500,color:text}}>
              <div style={{width:'32px',height:'32px',background:goldLight,borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px'}}>{icon}</div>
              {name}
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>Business impact</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>What Raddad does for your revenue</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'2rem'}}>Gulf businesses see measurable results from week one.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'10px'}}>
          {[['3x','More bookings','Instant replies convert 3x more customers than waiting hours.'],['47%','Revenue increase','Average revenue increase when switching to AI replies.'],['8 hrs','Saved per day','Stop answering repetitive messages. Focus on real work.'],['24/7','Always open','Replies at 2am, on Eid, during Ramadan. Never miss a customer.']].map(([n,l,d])=>(
            <div key={l as string} style={{background:deep,borderRadius:'14px',padding:'1.5rem'}}>
              <div style={{fontSize:'40px',fontWeight:500,color:gold,lineHeight:1,marginBottom:'8px'}}>{n}</div>
              <div style={{fontSize:'13px',fontWeight:500,marginBottom:'4px',color:'white'}}>{l}</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:1.5}}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>How it works</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Live in 10 minutes. No IT needed.</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'2rem'}}>Three steps and your AI employee is live.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'10px'}}>
          {[['١','Sign up free','Create your account. No credit card required.','2 minutes'],['٢','Tell us about your business','Answer 5 questions — prices, hours, location.','5 minutes'],['٣','Connect WhatsApp','Scan one QR code. Raddad starts replying.','3 minutes']].map(([n,t,d,time])=>(
            <div key={t as string} style={{background:'white',border:`0.5px solid ${border}`,borderRadius:'14px',padding:'1.5rem',textAlign:'center'}}>
              <div style={{width:'42px',height:'42px',borderRadius:'50%',background:goldLight,color:goldDark,fontSize:'18px',fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',border:`1px solid ${gold}`}}>{n}</div>
              <div style={{fontSize:'14px',fontWeight:500,marginBottom:'6px',color:text}}>{t}</div>
              <div style={{fontSize:'12px',color:textMuted,lineHeight:1.5,marginBottom:'8px'}}>{d}</div>
              <div style={{fontSize:'11px',color:teal,fontWeight:500}}>{time}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>What we offer</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Everything automated</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'2rem'}}>One AI employee that handles everything your WhatsApp receives.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px'}}>
          {[
            {icon:'💬',title:'Answers everything',desc:'Prices, hours, location — replies in 3 seconds in Arabic and English.',isNew:false},
            {icon:'📅',title:'Real-time booking',desc:'Customers see live availability and book instantly.',isNew:true},
            {icon:'💳',title:'Payments in WhatsApp',desc:'Collect deposits and full payments directly in the conversation.',isNew:true},
            {icon:'🎙️',title:'Arabic voice messages',desc:'Understands Gulf Arabic voice notes and replies instantly.',isNew:true},
            {icon:'📸',title:'Instagram DMs',desc:'Same AI handles your Instagram messages too.',isNew:true},
            {icon:'📊',title:'Weekly reports',desc:'Every Monday: messages answered, bookings, revenue collected.',isNew:false},
            {icon:'👤',title:'Human handoff',desc:'Complex queries routed to your team with full history.',isNew:false},
            {icon:'🌙',title:'Ramadan mode',desc:'Auto-adjusts hours and greetings during Gulf holidays.',isNew:false},
          ].map((f)=>(
            <div key={f.title} style={{background:'white',border:`0.5px solid ${border}`,borderRadius:'14px',padding:'1.25rem'}}>
              {f.isNew&&<div style={{fontSize:'10px',background:goldLight,color:goldDark,padding:'2px 7px',borderRadius:'100px',display:'inline-block',marginBottom:'6px',border:`0.5px solid ${gold}`,fontWeight:500}}>New</div>}
              <div style={{width:'38px',height:'38px',background:goldLight,borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',marginBottom:'10px'}}>{f.icon}</div>
              <div style={{fontSize:'14px',fontWeight:500,marginBottom:'4px',color:text}}>{f.title}</div>
              <div style={{fontSize:'12px',color:textMuted,lineHeight:1.5}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>Why Raddad wins</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>How we compare</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'2rem'}}>Every competitor costs 10x more, takes weeks to set up, or does not speak real Gulf Arabic.</p>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr>
              {['Feature','Raddad','ManyChat','Eshal','Manual staff'].map((h,i)=>(
                <th key={h} style={{fontSize:'12px',fontWeight:500,padding:'10px 14px',textAlign:'left',borderBottom:`0.5px solid ${border}`,color:i===1?goldDark:textMuted,background:i===1?goldLight:'transparent'}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Gulf Arabic','✓ Native','✗','✓','✓'],
              ['10-min setup','✓','Hours','✗ Days','✗'],
              ['SMB pricing','✓ From $99','Partial','✗ Enterprise','$2,000+/mo'],
              ['Real-time booking','✓','✗','Partial','Manual'],
              ['Payment collection','✓','✗','✗','Manual'],
              ['Voice messages','✓','✗','✗','✓'],
              ['Free trial no card','✓','Limited','✗','N/A'],
            ].map((row)=>(
              <tr key={row[0]}>
                {row.map((cell,ci)=>(
                  <td key={ci} style={{fontSize:'13px',padding:'11px 14px',borderBottom:`0.5px solid ${border}`,background:ci===1?'#FFFBF3':'transparent',fontWeight:ci===0?500:400,color:ci===0?text:String(cell).startsWith('✓')?teal:String(cell).startsWith('✗')?'#E24B4A':textMuted}}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>What customers say</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Gulf businesses love Raddad</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'2rem'}}>Real results from real businesses across the Gulf.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px'}}>
          {[
            {av:'أح',name:'Ahmed Al-Rashidi',biz:'مطعم الأصالة · Riyadh',text:'We were missing 40+ messages a day. Raddad handles everything. Bookings went up 60% in the first month.'},
            {av:'سم',name:'Dr. Sara Mohammed',biz:'Sara Clinic · Dubai',text:'200 WhatsApp messages daily. Raddad answers all of them. Saved 2 staff salaries in the first month.'},
            {av:'خس',name:'Khalid Al-Saud',biz:'Gulf Properties · Jeddah',text:'Setup took 8 minutes. The Arabic is perfect. Best investment we have made for the business.'},
          ].map((t)=>(
            <div key={t.name} style={{background:deep,borderRadius:'14px',padding:'1.25rem'}}>
              <div style={{color:gold,fontSize:'13px',letterSpacing:'2px',marginBottom:'8px'}}>★★★★★</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.7)',lineHeight:1.6,marginBottom:'12px',fontStyle:'italic'}}>"{t.text}"</div>
              <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,153,42,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:500,color:gold,flexShrink:0}}>{t.av}</div>
                <div><div style={{fontSize:'13px',fontWeight:500,color:'white'}}>{t.name}</div><div style={{fontSize:'11px',color:'rgba(255,255,255,0.4)'}}>{t.biz}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>Pricing</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Start free. Scale as you grow.</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'2rem'}}>Every plan includes Gulf Arabic, 24/7 uptime, and instant replies.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'10px'}}>
          {[
            {name:'Free',price:'$0',desc:'Try with no commitment',features:['50 AI replies/month','Arabic + English','1 WhatsApp number'],popular:false},
            {name:'Starter',price:'$99',desc:'Small businesses',features:['500 AI replies/month','Basic booking','Weekly report'],popular:false},
            {name:'Growth',price:'$249',desc:'For businesses ready to scale',features:['Unlimited replies','Booking + payments','Voice + Instagram','Analytics dashboard'],popular:true},
            {name:'Pro',price:'$599',desc:'Large operations',features:['Everything in Growth','Multiple numbers','CRM integration'],popular:false},
          ].map((plan)=>(
            <div key={plan.name} style={{background:'white',border:plan.popular?`2px solid ${gold}`:`0.5px solid ${border}`,borderRadius:'14px',padding:'1.5rem',position:'relative'}}>
              {plan.popular&&<div style={{position:'absolute',top:'-11px',left:'50%',transform:'translateX(-50%)',background:gold,color:deep,fontSize:'10px',fontWeight:500,padding:'3px 12px',borderRadius:'100px',whiteSpace:'nowrap'}}>Most popular</div>}
              <div style={{fontSize:'14px',fontWeight:500,marginBottom:'3px',color:text}}>{plan.name}</div>
              <div style={{fontSize:'28px',fontWeight:500,color:goldDark}}>{plan.price}<span style={{fontSize:'13px',color:textMuted,fontWeight:400}}>/mo</span></div>
              <div style={{fontSize:'12px',color:textMuted,margin:'6px 0 10px',lineHeight:1.4}}>{plan.desc}</div>
              {plan.features.map((f)=>(
                <div key={f} style={{fontSize:'12px',color:textMuted,padding:'4px 0',borderTop:`0.5px solid ${border}`,display:'flex',gap:'5px'}}>
                  <span style={{color:teal}}>✓</span>{f}
                </div>
              ))}
              <Link href="/signup" style={{display:'block',width:'100%',marginTop:'10px',padding:'9px',borderRadius:'8px',fontSize:'13px',fontWeight:500,cursor:'pointer',border:`0.5px solid ${gold}`,background:plan.popular?gold:'transparent',color:plan.popular?deep:goldDark,textAlign:'center',textDecoration:'none'}}>
                {plan.name==='Free'?'Get started free':'Start free trial'}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'0.5px',background:border,margin:'0 1.5rem'}}></div>

      <div style={{maxWidth:'760px',margin:'0 auto',padding:'3.5rem 1.5rem'}}>
        <div style={{fontSize:'11px',fontWeight:500,color:gold,textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:'8px'}}>FAQ</div>
        <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',color:text,marginBottom:'8px'}}>Questions Gulf business owners ask</h2>
        <p style={{fontSize:'15px',color:textMuted,lineHeight:1.7,marginBottom:'1.5rem'}}>Everything you need to know before getting started.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          {[
            ['Does it really understand Gulf Arabic dialect?','Yes — Raddad is trained on Gulf Arabic including Saudi, UAE, Kuwaiti, and Qatari dialects. It understands how your customers actually speak, not formal Arabic.'],
            ['How long does setup take?','10 minutes from signup to live. You answer 5 questions about your business, scan a QR code to connect WhatsApp, and Raddad starts replying immediately.'],
            ['What if a customer asks something Raddad does not know?','Raddad tells the customer that a team member will follow up, and sends you an instant notification. You can update its knowledge anytime from your dashboard.'],
            ['Is my customer data safe and private?','Yes. All data is encrypted, stored securely, and never used to train AI models. Your conversations belong to you — never shared with third parties.'],
            ['Can I cancel anytime?','Yes — no contracts, no cancellation fees. Cancel, pause, or change your plan anytime. The free plan is free forever.'],
          ].map(([q,a])=>(
            <div key={q as string} style={{background:'white',border:`0.5px solid ${border}`,borderRadius:'12px',overflow:'hidden'}}>
              <div onClick={toggleFaq} style={{padding:'14px 16px',fontSize:'14px',fontWeight:500,cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',color:text}}>
                {q}<span style={{color:gold,fontSize:'18px',fontWeight:300}}>+</span>
              </div>
              <div style={{padding:'0 16px 14px',fontSize:'13px',color:textMuted,lineHeight:1.6,display:'none'}}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:'0 1.5rem',marginBottom:'3rem'}}>
        <div style={{background:deep,borderRadius:'16px',padding:'3.5rem 2rem',textAlign:'center',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,opacity:0.03,backgroundImage:'repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 50%)',backgroundSize:'20px 20px'}}></div>
          <h2 style={{fontSize:'30px',fontWeight:500,letterSpacing:'-0.5px',marginBottom:'10px',color:'white',position:'relative'}}>Your business deserves a <span style={{color:gold}}>24/7 employee.</span></h2>
          <p style={{fontSize:'15px',color:'rgba(255,255,255,0.6)',marginBottom:'1.5rem',position:'relative'}}>Set up in 10 minutes. Start replying automatically tonight.</p>
          <div style={{display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap',position:'relative'}}>
            <input style={{flex:1,minWidth:'200px',maxWidth:'280px',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'8px',padding:'11px 14px',fontSize:'14px',background:'rgba(255,255,255,0.08)',color:'white',outline:'none'}} type="tel" placeholder="+971 50 000 0000" />
            <Link href="/signup" style={{background:gold,color:deep,border:'none',padding:'11px 22px',borderRadius:'8px',fontSize:'14px',fontWeight:500,textDecoration:'none',whiteSpace:'nowrap'}}>ابدأ مجاناً →</Link>
          </div>
          <p style={{fontSize:'12px',color:'rgba(255,255,255,0.35)',marginTop:'10px',position:'relative'}}>Free plan available · No credit card · Cancel anytime</p>
        </div>
      </div>

      <footer style={{background:deep2,borderTop:'0.5px solid rgba(255,255,255,0.08)',padding:'1.5rem 2rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'8px',fontSize:'13px',color:'rgba(255,255,255,0.4)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <div style={{width:'26px',height:'26px',background:gold,borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',color:deep,fontSize:'13px',fontWeight:500}}>ر</div>
          <span style={{fontSize:'15px',fontWeight:500,color:'rgba(255,255,255,0.7)'}}>Raddad</span>
        </div>
        <span>© 2026 Raddad. Built for Gulf businesses.</span>
        <span>getraddad.com · Privacy · Terms</span>
      </footer>

    </div>
  )
}
