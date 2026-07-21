export default function Footer() {
  return (
    <footer className="bg-foreground py-16 text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                AK
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white">Anjali Kids</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Play School</span>
              </div>
            </div>
            <p className="text-white/60 font-medium max-w-sm mb-6 leading-relaxed">
              Empowering young minds to explore, learn, and grow in a nurturing environment in Pundri, Haryana.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
               {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
               <span className="text-white/80 ml-2 font-medium">Rated 5 Stars on Google</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors font-medium">About Us</a></li>
              <li><a href="#programs" className="text-white/60 hover:text-primary transition-colors font-medium">Programs</a></li>
              <li><a href="#teachers" className="text-white/60 hover:text-primary transition-colors font-medium">Our Staff</a></li>
              <li><a href="#admissions" className="text-white/60 hover:text-primary transition-colors font-medium">Admissions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>Pundri, Haryana 136026</li>
              <li><a href="tel:+919768144444" className="hover:text-primary transition-colors">+91 97681 44444</a></li>
              <li>Open 7 Days</li>
              <li>6:30 AM – 11:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40 font-medium">
          <p>© {new Date().getFullYear()} Anjali Kids Play School. All rights reserved.</p>
          <p>Play. Explore. Learn.</p>
        </div>
      </div>
    </footer>
  )
}
