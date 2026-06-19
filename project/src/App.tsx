{/* Fixed Contact Buttons */}
<div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col shadow-xl rounded-l-xl overflow-hidden">
  <a
    href={phoneHref}
    className="flex items-center gap-3 px-5 py-3 bg-black text-white font-semibold hover:bg-neutral-800 transition"
  >
    <Phone className="w-5 h-5 text-white" />
    <span>{t.callButton}</span>
  </a>

  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-100 transition border-t border-black/10"
  >
    <MessageCircle className="w-5 h-5 text-black" />
    <span>{t.whatsappButton}</span>
  </a>
</div>

{/* Mobile Contact Buttons */}
<div className="fixed bottom-4 left-4 right-4 z-40 flex md:hidden gap-3">
  <a
    href={phoneHref}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-neutral-800 transition"
  >
    <Phone className="w-5 h-5 text-white" />
    <span>{t.callButton}</span>
  </a>

  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-neutral-100 transition border border-black/10"
  >
    <MessageCircle className="w-5 h-5 text-black" />
    <span>{t.whatsappButton}</span>
  </a>
</div>
