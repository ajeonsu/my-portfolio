import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About me" subtitle="What I bring to data-driven, field-ready, and government-adjacent systems.">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Dashboards & databases",
            body: "PostgreSQL-backed apps with analytics views, exports, and role-based access—GROWTHetect nutrition monitoring, EC ONE CRM, and CyberConnect delivery data.",
          },
          {
            title: "Field capture & integrations",
            body: "IoT bridge and manual fallback for reliable data entry, plus REST APIs and channel integrations (LINE, email, marketplaces) with error-aware pipelines.",
          },
          {
            title: "Servers, cloud & documentation",
            body: "AWS operations (backups, monitoring, IAM), deployment support, and clear technical writing for stakeholders and partner agencies.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-400">{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
