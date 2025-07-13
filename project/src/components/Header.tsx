<div className="flex items-center justify-between h-20">
  {/* LOGO */}
  <div className="flex items-center">
    <div className="text-3xl font-bold text-besa-dark">
      <span className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6">BESA</span>
    </div>
  </div>

  {/* SEARCH + LANGUAGE + MENU (mobile) */}
  <div className="flex items-center space-x-4 lg:hidden">
    {/* Search icon */}
    <button className="p-1">
      <Search className="w-5 h-5 text-besa-dark" />
    </button>

    {/* Language selector */}
    <select className="text-sm text-besa-dark bg-transparent focus:outline-none">
      <option value="tr">TR</option>
      <option value="en">EN</option>
    </select>

    {/* Mobile menu toggle */}
    <button 
      className="p-2"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {/* CONTACT INFO (desktop) */}
  <div className="hidden lg:flex items-center space-x-4">
    <div className="flex items-center space-x-2 text-sm text-besa-dark/70">
      <Phone className="w-4 h-4" />
      <span className="font-semibold">+90 533 016 98 48</span>
    </div>
    <div className="flex items-center space-x-2 text-sm text-besa-dark/70">
      <Mail className="w-4 h-4" />
      <span className="font-semibold">info@besainsaat.net</span>
    </div>
  </div>
</div>
