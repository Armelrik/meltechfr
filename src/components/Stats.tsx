const Stats = () => {
  const stats = [
    { value: "150+", label: "Projets réalisés" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "12", label: "Pays couverts" },
    { value: "+300%", label: "Croissance moyenne" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Les chiffres qui <span className="text-gradient">parlent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre expertise au service de votre réussite digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
