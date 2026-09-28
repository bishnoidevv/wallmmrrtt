import { useState } from 'react';
import { Shield, BadgeCheck, Zap, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How many deals do I need to complete?',
    a: 'You need to complete 4 to 5 sponsored deals to qualify. Completing all required offers gives you the chance to receive the reward.',
  },
  {
    q: 'What kind of deals are involved?',
    a: 'Deals include free trials, app downloads, and special offers from our partners.',
  },
  {
    q: 'When will I receive my reward?',
    a: 'Eligible participants receive their reward within 24-48 hours after all requirements are verified.',
  },
];

const steps = [
  'Click the button below',
  'Enter your email & basic info',
  'Complete 4 to 5 required deals',
  'Receive your reward once verified',
];

const trustItems = [
  { icon: Shield, label: 'Secure' },
  { icon: BadgeCheck, label: 'Verified' },
  { icon: Zap, label: 'Fast' },
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex justify-center bg-[#F8F8F8]">
      <div className="w-full max-w-[390px] pb-12">
        {/* Hero */}
        <div className="pt-5 px-4">
          <div
            className="relative overflow-hidden rounded-[22px] px-[22px] pb-7 pt-8 text-center shadow-[0_16px_48px_rgba(0,79,153,0.40),inset_0_1px_0_rgba(255,255,255,0.15)]"
            style={{ background: 'linear-gradient(160deg, #0071CE 0%, #004F99 100%)' }}
          >
            {/* decorative circles */}
            <div className="pointer-events-none absolute -top-[60px] -right-[60px] h-[180px] w-[180px] rounded-full bg-white/[0.07]" />
            <div className="pointer-events-none absolute -bottom-[50px] -left-[40px] h-[150px] w-[150px] rounded-full bg-black/[0.08]" />

            <div className="relative">
              <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/15 px-3.5 py-[5px] text-[10px] font-extrabold uppercase tracking-[0.22em] text-white">
                Walmart
              </span>
              <div
                className="mb-1 text-[82px] font-black leading-none tracking-[-3px] text-[#FFC220]"
                style={{ textShadow: '0 4px 16px rgba(0,0,0,0.20)' }}
              >
                $750
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[rgba(180,220,255,0.90)]">
                Gift Card Reward
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="pt-6 px-4">
          <h1 className="mb-2 text-center text-[20px] font-extrabold leading-[1.35] text-[#111111]">
            Follow the steps below
            <br />
            to receive your reward
          </h1>
          <p className="mb-[22px] px-2 text-center text-[12px] leading-[1.7] text-[#999999]">
            Complete each step to qualify. Verification is required before your reward is issued.
          </p>

          {/* Steps */}
          <div className="mb-[22px] flex flex-col gap-[9px]">
            {steps.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 rounded-[14px] border border-[#EBEBEB] bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.045)]"
              >
                <div
                  className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full text-[14px] font-extrabold text-white shadow-[0_3px_10px_rgba(0,79,153,0.40)]"
                  style={{ background: 'linear-gradient(135deg, #0071CE 0%, #004F99 100%)' }}
                >
                  {i + 1}
                </div>
                <span className="text-[13px] font-medium leading-[1.4] text-[#222222]">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://giftclick.org/aff_c?offer_id=3004&aff_id=148566"
            target="_blank"
            rel="noopener"
            className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-[14px] px-[18px] py-[18px] text-[16px] font-extrabold tracking-[0.02em] text-white no-underline shadow-[0_8px_24px_rgba(0,79,153,0.40),inset_0_1px_0_rgba(255,255,255,0.15)] transition-[opacity,transform] duration-200 hover:opacity-[0.91] hover:-translate-y-px active:translate-y-0"
            style={{ background: 'linear-gradient(135deg, #0071CE 0%, #004F99 100%)' }}
          >
            Get Started →
          </a>
          <p className="mb-7 text-center text-[10px] leading-[1.6] text-[#C0C0C0]">
            Available in selected countries — US, UK, AU, CA
            <br />
            Reward subject to eligibility and offer terms.
          </p>

          {/* FAQ */}
          <div className="border-t border-[#E8E8E8] pt-5">
            <h2 className="mb-3.5 text-center text-[15px] font-extrabold text-[#111111]">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border-b border-[#EBEBEB]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-2.5 py-3.5 text-left text-[12px] font-bold text-[#111111]"
                    >
                      {faq.q}
                      <span
                        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white shadow-[0_2px_6px_rgba(0,79,153,0.35)] transition-transform duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #0071CE, #004F99)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ChevronDown size={11} strokeWidth={3} />
                      </span>
                    </button>
                    <div
                      className="overflow-hidden text-[12px] leading-[1.7] text-[#888888] transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? '200px' : '0',
                        paddingBottom: isOpen ? '14px' : '0',
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust */}
          <div className="mt-5 flex justify-center gap-7 border-t border-[#E8E8E8] pt-5">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-[7px]">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[14px] shadow-[0_2px_10px_rgba(0,79,153,0.12)]"
                  style={{ background: 'linear-gradient(135deg, #EBF5FF, #D0E8FF)' }}
                >
                  <Icon size={21} color="#0071CE" strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.04em] text-[#AAAAAA]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
