const credentials = [
  'SAM.gov Registered',
  'CAGE Code: 1A8D6',
  'UEI: HPP7BBEYCQG5',
  'CA SBE Certified #2051043',
  '20+ Years Experience',
  'Published Author',
  'Systems Architecture',
  'Government Training Specialist',
  'SCORM Compliant',
  'Section 508 Accessible',
]

export default function CredentialMarquee() {
  const doubled = [...credentials, ...credentials]

  return (
    <div
      className="overflow-hidden py-3.5 border-y border-white/10 bg-[#04080B]"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="text-xs font-medium text-white/50 uppercase tracking-widest flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-[#FF5833] inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
