tsx'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#F0FBF7' }}>

      <nav style={{ background: 'white', borderBottom: '1px solid #d4ede4', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: '#00A86B', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '16px' }}>ر</div>
          <span style={{ fontWeight: 600, fontSize: '18px' }}>Raddad</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/login" style={{ fontSize: '14px', color: '#5a7a6e', textDecoration: 'none' }}>Sign in</Link>
          <Link href="/signup" style={{ background: '#00A86B', color: 'white', padding: '8px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Start free</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '5rem 2rem 3rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E6F7F1', color: '#085041', fontSize: '12px', fontWeight: 500, padding: '4px 14px', borderRadius: '100px', marginBottom: '1.5rem' }}>
          AI employee for Gulf businesses
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '1.2rem', color: '#0a1628' }}>
          Your business<br /><span style={{ color: '#00A86B' }}>never sleeps.</span>
        </h1>
        <p style={{ fontSize: '17px', color: '#5a7a6e', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem' }}>
          Raddad answers every WhatsApp message automatically — in Arabic and English, 24/7. Books appointments, sends quotes, follows up leads.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '1rem' }}>
          <Link href="/signup" style={{ background: '#00A86B', color: 'white', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>Start free trial →</Link>
          <Link href="/demo" style={{ background: 'transparent', color: '#0a1628', border: '1px solid #d4ede4', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', textDecoration: 'none' }}>See demo</Link>
        </div>
        <p style={{ fontSize: '12px', color: '#5a7a6e' }}>Free plan available · No credit card · Setup in 10 minutes</p>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="card">
            <div style={{ fontSize: '11px', color: '#E24B4A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Without Raddad</div>
            <div style={{ background: '#E5DDD5', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#075E54', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 600 }}>م</div>
                <div style={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>مطعم الأصالة</div>
              </div>
              <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {['كم سعر الكبسة؟ ✓', 'هل عندكم توصيل؟ ✓', 'متى تفتحون؟ ✓', 'ما ردوا علي 😞'].map((m, i) => (
                  <div key={i} style={{ background: 'white', padding: '6px 10px', borderRadius: '0 8px 8px 8px', fontSize: '11px', maxWidth: '85%' }}>{m}</div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#E24B4A', marginTop: '8px', textAlign: 'center' }}>Lost customers. Zero replies.</div>
          </div>
          <div className="card">
            <div style={{ fontSize: '11px', color: '#00A86B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>With Raddad</div>
            <div style={{ background: '#E5DDD5', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#075E54', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00A86B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 600 }}>ر</div>
                <div>
                  <div style={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>مطعم الأصالة</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px' }}>Raddad AI · Online</div>
                </div>
              </div>
              <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ background: 'white', padding: '6px 10px', borderRadius: '0 8px 8px 8px', fontSize: '11px', maxWidth: '85%' }}>كم سعر الكبسة؟</div>
                <div style={{ background: '#E8F5E9', padding: '6px 10px', borderRadius: '0 8px 8px 8px', fontSize: '11px', maxWidth: '90%', borderLeft: '2px solid #00A86B' }}>الكبسة 45 ريال تشمل خبز وسلطة 🍚</div>
                <div style={{ background: 'white', padding: '6px 10px', borderRadius: '0 8px 8px 8px', fontSize: '11px', maxWidth: '85%' }}>هل عندكم توصيل؟</div>
                <div style={{ background: '#E8F5E9', padding: '6px 10px', borderRadius: '0 8px 8px 8px', fontSize: '11px', maxWidth: '90%', borderLeft: '2px solid #00A86B' }}>نعم! توصيل 10 ريال داخل الرياض 🛵</div>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#00A86B', marginTop: '8px', textAlign: 'center' }}>Instant replies. Every customer served.</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: '#d4ede4', border: '1px solid #d4ede4', borderRadius: '14px', overflow: 'hidden' }}>
          {[['3 sec', 'reply time'], ['24/7', 'always online'], ['Arabic', 'native Gulf support']].map(([n, l], i) => (
            <div key={i} style={{ background: 'white', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 600, color: '#00A86B' }}>{n}</div>
              <div style={{ fontSize: '13px', color: '#5a7a6e', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '12px' }}>
          {[
            ['💬', 'Answers everything', 'Prices, hours, menu — your AI knows your business.'],
            ['📅', 'Books appointments', 'Customers book directly in WhatsApp. Auto-confirmed.'],
            ['💳', 'Takes payments', 'Collect deposits inside WhatsApp via Stripe.'],
            ['🎙️', 'Voice messages', 'Understands Arabic voice notes and replies instantly.'],
            ['📸', 'Instagram DMs', 'Same AI handles your Instagram messages too.'],
            ['📊', 'Weekly reports', 'Every Monday: messages answered, bookings, revenue.'],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="card">
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
              <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '6px' }}>{title as string}</div>
              <div style={{ fontSize: '13px', color: '#5a7a6e', lineHeight: 1.5 }}>{desc as string}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.5px' }}>Simple pricing</h2>
          <p style={{ color: '#5a7a6e', marginTop: '8px' }}>Start free. Upgrade when you see results.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '12px' }}>
          {[
            { name: 'Free', price: '$0', desc: 'Try forever', features: ['50 AI replies/month', 'Arabic + English', '1 WhatsApp number'], popular: false },
            { name: 'Starter', price: '$99', desc: 'Small businesses', features: ['500 AI replies/month', 'Basic booking', 'Weekly report'], popular: false },
            { name: 'Growth', price: '$249', desc: 'Growing businesses', features: ['Unlimited replies', 'Real-time booking', 'Payment collection', 'Voice messages', 'Instagram DMs'], popular: true },
            { name: 'Pro', price: '$599', desc: 'Large operations', features: ['Everything in Growth', 'Multiple numbers', 'CRM integration', 'Dedicated support'], popular: false },
          ].map((plan, i) => (
            <div key={i} style={{ background: 'white', border: plan.popular ? '2px solid #00A86B' : '1px solid #d4ede4', borderRadius: '14px', padding: '1.5rem', position: 'relative' }}>
              {plan.popular && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00A86B', color: 'white', fontSize: '11px', fontWeight: 500, padding: '3px 12px', borderRadius: '100px', whiteSpace: 'nowrap' }}>Most popular</div>}
              <div style={{ fontWeight: 500, fontSize: '15px', marginBottom: '4px' }}>{plan.name}</div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: '#00A86B' }}>{plan.price}<span style={{ fontSize: '14px', color: '#5a7a6e', fontWeight: 400 }}>/mo</span></div>
              <div style={{ fontSize: '13px', color: '#5a7a6e', margin: '8px 0 12px' }}>{plan.desc}</div>
              {plan.features.map((f, fi) => (
                <div key={fi} style={{ fontSize: '13px', color: '#5a7a6e', padding: '4px 0', borderTop: '1px solid #d4ede4', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#00A86B' }}>✓</span>{f}
                </div>
              ))}
              <Link href="/signup" style={{ display: 'block', marginTop: '14px', textAlign: 'center', padding: '10px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', background: plan.popular ? '#00A86B' : 'transparent', color: plan.popular ? 'white' : '#00A86B', border: plan.popular ? 'none' : '1.5px solid #00A86B' }}>
                {plan.name === 'Free' ? 'Get started free' : 'Start free trial'}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
        <div style={{ background: '#E6F7F1', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '1rem' }}>Start for free tonight.</h2>
          <p style={{ color: '#5a7a6e', marginBottom: '1.5rem' }}>Set up in 10 minutes. Your AI employee starts replying immediately.</p>
          <Link href="/signup" style={{ display: 'inline-block', background: '#00A86B', color: 'white', padding: '14px 36px', borderRadius: '10px', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>Get started free →</Link>
        </div>
      </div>

      <footer style={{ borderTop: '1px solid #d4ede4', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a7a6e', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ fontWeight: 600 }}>Raddad</div>
        <span>© 2026 Raddad. Built for Gulf businesses.</span>
        <span>getraddad.com</span>
      </footer>

    </div>
  )
}
