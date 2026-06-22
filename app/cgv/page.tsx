import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Glam's Hôtel Paris",
  description:
    "Consultez les Conditions Générales de Vente de Glam's Hôtel Paris : modalités de réservation, annulation, paiement, séjour et données personnelles.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.leglamshotel.com/cgv",
    languages: {
      "fr":        "https://www.leglamshotel.com/cgv",
      "x-default": "https://www.leglamshotel.com/cgv",
    },
  },
};

const sections = [
  {
    number: "1",
    title: "Dispositions générales",
    content: `Les présentes conditions générales de vente ont pour objet de définir les modalités et conditions dans lesquelles la SAS Glam's hôtel permet à ses clients, ci-après le « Client » ou les « Clients », de bénéficier de l'ensemble des services proposés par l'Hôtel, notamment les services de réservation et d'hébergement.

Les réservations peuvent être effectuées :
- sur le site internet www.leglamshotel.com ;
- par téléphone au +33 1 45 40 93 53 ;
- sur place auprès de la réception ;
- par l'intermédiaire d'agences sélectionnées par la SAS Glam's hôtel ;
- par le biais de partenaires ou plateformes de réservation.

Le Client déclare avoir reçu de la SAS Glam's hôtel toutes les informations nécessaires pour effectuer son choix et poursuivre sa réservation.

Toute réservation réalisée sur le site www.leglamshotel.com suppose la consultation et l'acceptation complète et sans réserve des présentes conditions générales de vente, des conditions de vente du tarif réservé et de la politique de confidentialité.

Le Client confirme cette acceptation en cochant la case prévue à cet effet avant la validation définitive de sa réservation. Aucune réservation en ligne ne peut être validée sans cet accord.

Pour tout autre mode de réservation, le Client reçoit les conditions générales de vente avec la confirmation de sa réservation, par email ou sur support papier. La confirmation de réservation entraîne l'adhésion aux présentes conditions générales de vente et l'acceptation complète et sans réserve de leurs dispositions.

Lorsque la réservation est effectuée par l'intermédiaire d'un partenaire ou d'une plateforme de réservation tierce, le Client est également soumis aux conditions particulières de ce partenaire, en complément des présentes conditions générales de vente et des conditions du tarif réservé.

Le Client dispose de la faculté de sauvegarder et d'imprimer les présentes conditions générales de vente en utilisant les fonctionnalités standards de son navigateur ou de son ordinateur.

Le Client déclare avoir la pleine capacité juridique lui permettant de s'engager au titre des présentes conditions générales de vente.

Toute réservation effectuée par un mineur non accompagné d'une personne majeure est interdite. L'Hôtel se réserve le droit de refuser l'accès à l'établissement dans un tel cas.

Les normes de sécurité relatives à la capacité d'accueil prennent en compte toute personne, mineure ou majeure. Les enfants mineurs demeurent sous l'entière responsabilité des adultes les accompagnant.

Le séjour des enfants de 0 à 3 ans est gratuit. Un lit bébé peut être mis à disposition sur demande au moment de la réservation, sous réserve de disponibilité.`,
  },
  {
    number: "2",
    title: "Annulation ou modification d'une réservation",
    content: `Toute annulation ou modification d'une réservation effectuée directement auprès de l'Hôtel doit être adressée par écrit à l'adresse suivante :

reception@leglamshotel.com

L'annulation ou la modification de la réservation ne sera considérée comme effective qu'après confirmation écrite de l'Hôtel.

Les conditions d'annulation, de modification ou de remboursement applicables sont celles prévues par les conditions de vente du tarif réservé, acceptées par le Client au moment de la réservation.`,
  },
  {
    number: "3",
    title: "Absence de droit de rétractation",
    content: `Il est rappelé au Client, conformément à l'article L. 221-28, 12° du Code de la consommation, qu'il ne dispose pas du droit de rétractation prévu à l'article L. 221-18 du Code de la consommation pour les prestations d'hébergement fournies à une date ou selon une période déterminée.

Les conditions d'annulation, de modification ou de remboursement applicables sont celles prévues par les conditions de vente du tarif réservé, acceptées par le Client au moment de la réservation.`,
  },
  {
    number: "4",
    title: "Réclamations",
    content: `Le Client est invité à signaler à la réception, dès qu'il en a connaissance, tout dysfonctionnement, toute difficulté ou toute insatisfaction rencontrée pendant son séjour, afin de permettre à l'Hôtel d'y remédier dans les meilleurs délais.

Cette information ne prive pas le Client de la possibilité d'adresser ultérieurement une réclamation écrite à l'Hôtel.

Toute réclamation relative à une réservation ou à un séjour doit être adressée à Glam's hôtel par écrit :

Par email :
reception@leglamshotel.com

Par courrier :
Glam's hôtel
47 rue Beaunier
75014 Paris

Le Client est invité à joindre à sa réclamation tout élément utile permettant son traitement, notamment le numéro de réservation, les dates du séjour, le nom du titulaire de la réservation, le descriptif précis de la difficulté rencontrée et tout justificatif éventuel.

L'Hôtel s'engage à examiner la réclamation et à y répondre dans un délai raisonnable.`,
  },
  {
    number: "5",
    title: "Médiation de la consommation",
    content: `Conformément aux articles L. 612-1 et suivants du Code de la consommation, le Client consommateur a la possibilité de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige l'opposant à l'Hôtel.

Avant toute saisine du médiateur, le Client doit avoir adressé une réclamation écrite préalable à l'Hôtel, par courrier ou par email, aux coordonnées suivantes :

Glam's hôtel
47 rue Beaunier
75014 Paris
Email : reception@leglamshotel.com

En cas de réponse négative de l'Hôtel, ou en l'absence de réponse dans un délai de deux mois à compter de l'envoi de la réclamation écrite, le Client peut saisir le médiateur compétent :

MTV – Médiation Tourisme Voyage
CS 30958
75383 Paris Cedex 08
Site internet : www.mtv.travel
Email : info@mtv.travel

La saisine du médiateur est gratuite pour le consommateur.

Le Client dispose d'un délai d'un an à compter de sa réclamation écrite auprès de l'Hôtel pour présenter une demande de médiation.`,
  },
  {
    number: "6",
    title: "Données personnelles",
    content: `Dans le cadre de la réservation et du séjour du Client, Glam's hôtel est amené à collecter et traiter des données personnelles, notamment : nom, prénom, civilité, coordonnées postales, adresse email, numéro de téléphone, informations relatives à la réservation, dates de séjour, prestations choisies, préférences communiquées par le Client, informations nécessaires à la facturation, ainsi que les informations requises pour le respect des obligations légales applicables à l'activité hôtelière.

Ces données sont traitées pour les finalités suivantes :
- gestion des demandes de réservation ;
- exécution du contrat de séjour ;
- gestion de la relation client ;
- facturation et comptabilité ;
- respect des obligations légales et réglementaires ;
- prévention des fraudes et sécurisation des paiements ;
- envoi d'informations ou d'offres commerciales lorsque le Client y a consenti ou lorsque la réglementation l'autorise.

Les données sont destinées à Glam's hôtel, à son personnel habilité, ainsi qu'aux prestataires techniques intervenant pour son compte, notamment les prestataires de réservation, de paiement, d'hébergement informatique, de maintenance, de comptabilité ou de gestion hôtelière.

Les données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, augmentée, le cas échéant, des durées légales de conservation applicables, notamment en matière comptable, fiscale ou de preuve.

Lorsque certains prestataires sont situés en dehors de l'Union européenne, Glam's hôtel veille à ce que les transferts de données soient encadrés par des garanties appropriées conformément au Règlement général sur la protection des données, notamment par une décision d'adéquation de la Commission européenne, des clauses contractuelles types ou tout autre mécanisme reconnu par la réglementation applicable.

Conformément à la loi Informatique et Libertés et au Règlement général sur la protection des données, le Client dispose d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation du traitement et, lorsque cela est applicable, d'un droit à la portabilité de ses données.

Le Client peut également définir des directives relatives au sort de ses données après son décès.

Pour exercer ses droits, le Client peut contacter Glam's hôtel :

Par email :
reception@leglamshotel.com

Par courrier :
Glam's hôtel
47 rue Beaunier
75014 Paris

Le Client dispose également du droit d'introduire une réclamation auprès de la CNIL.`,
  },
  {
    number: "7",
    title: "Paiement et garantie bancaire",
    content: `Le Client communique ses coordonnées bancaires, selon le tarif réservé, soit à titre de garantie de la réservation, soit pour procéder au paiement ou au prépaiement du séjour.

La saisie des données bancaires s'effectue par l'intermédiaire d'un prestataire de paiement sécurisé. Les informations de carte bancaire sont traitées dans un environnement sécurisé. Glam's hôtel ne conserve pas le cryptogramme visuel de la carte bancaire.

L'Hôtel pourra demander au Client de présenter, lors de son arrivée, une pièce d'identité ainsi que la carte bancaire utilisée pour garantir la réservation ou effectuer le paiement, afin de prévenir les fraudes et de vérifier la concordance des informations communiquées lors de la réservation.

En cas de vente à distance ou de tarif prépayé, le Client pourra être invité à régler son séjour avant son arrivée au moyen d'un lien de paiement sécurisé, notamment avec authentification 3D Secure lorsque celle-ci est requise.

Le débit du paiement s'effectue à l'Hôtel lors de l'arrivée, sauf conditions ou tarifs spéciaux prévoyant un prépaiement total ou partiel au moment de la réservation.

Dans le cas d'un tarif soumis à prépaiement, la somme due est débitée au moment de la réservation, conformément aux conditions de vente du tarif réservé.

En cas de départ anticipé, les sommes dues seront calculées conformément aux conditions de vente du tarif réservé. Pour les tarifs non annulables, non modifiables ou prépayés, aucun remboursement ne sera dû.

Lors d'une réservation effectuée directement auprès de l'Hôtel pour un montant supérieur à 5 000 euros, l'Hôtel pourra demander au Client d'effectuer le paiement par virement bancaire. Le paiement par virement pourra également être proposé pour des montants inférieurs, sur demande du Client ou de l'Hôtel.

En cas de no-show, c'est-à-dire en cas de réservation non annulée et pour laquelle le Client ne s'est pas présenté à l'Hôtel le jour prévu, l'Hôtel pourra débiter, à titre d'indemnité, le montant prévu par les conditions de vente du tarif réservé. À défaut de précision particulière, l'indemnité pourra correspondre au montant d'une nuit réservée.`,
  },
  {
    number: "8",
    title: "Séjour à l'Hôtel",
    content: `Toute personne séjournant dans l'établissement doit présenter une pièce d'identité valide au moment de son arrivée. À défaut, l'Hôtel peut refuser l'accès à la chambre et/ou annuler la réservation, conformément aux conditions de vente du tarif réservé.

L'accès aux chambres est garanti à partir de 15h00 le jour de l'arrivée.

Les chambres doivent être libérées avant 12h00 le jour du départ.

Les chambres mises à disposition du Client sont désignées selon leur capacité maximale. Le Client ne peut louer une chambre pour un nombre de personnes supérieur à celui prévu lors de la réservation.

Le Client ne peut introduire dans la chambre des personnes non déclarées lors de la réservation qu'après avoir sollicité l'autorisation expresse de l'Hôtel. L'Hôtel se réserve le droit d'effectuer toutes les vérifications nécessaires.

Les animaux domestiques ne sont pas acceptés au sein de l'établissement.

Le Client s'engage à utiliser la chambre ainsi que les espaces communs mis à sa disposition de manière raisonnable et conforme à leur destination.

L'Hôtel se réserve le droit de refuser de recevoir ou d'exclure, sans indemnité ni remboursement, tout Client dont le comportement serait bruyant, incorrect, violent, injurieux, contraire aux bonnes mœurs, à l'hygiène, à l'ordre public ou au respect du personnel et des autres clients.

Le Client est courtois et respectueux vis-à-vis du personnel de l'Hôtel. Le Client s'abstient de toute violence verbale ou physique, de tout comportement ou propos discriminatoire, raciste, injurieux, menaçant ou de toute forme de harcèlement.

L'Hôtel propose un accès Wi-Fi gratuit. Le Client s'engage à utiliser cet accès conformément aux lois et règlements en vigueur et à ne pas l'utiliser pour des activités illicites, notamment pour porter atteinte aux droits d'auteur ou aux droits de tiers.

Tout dégât occasionné par le Client, ou par les occupants de son fait, dans la chambre ou dans les différents espaces occupés au cours du séjour, doit être signalé à la réception de l'Hôtel. Les frais de remise en état pourront être facturés au Client.

Pour des raisons de sécurité et pour le respect de chacun, il est strictement interdit de fumer dans l'ensemble de l'Hôtel. Le non-respect de cette interdiction expose le Client à une facturation forfaitaire de 200 euros, sans préjudice d'éventuelles poursuites ou de la facturation de frais supplémentaires en cas de dommage.

Tout déclenchement intempestif de l'alarme incendie résultant du non-respect de cette interdiction pourra être facturé au Client au titre des frais de remise en service du système de sécurité incendie.

Le Client devra se conformer au règlement intérieur de l'Hôtel, affiché à la réception, consultable sur le site internet de l'Hôtel et disponible à tout moment sur simple demande.

En cas de non-respect du règlement intérieur, l'Hôtel pourra inviter le Client à quitter l'établissement, sans indemnité ni remboursement si un règlement a déjà été effectué. Dans le cas où aucun règlement n'aurait encore été effectué, le Client devra s'acquitter des sommes dues conformément aux conditions de vente du tarif réservé.

Toute demande de départ tardif doit être effectuée auprès de la réception avant la veille du départ et pourra faire l'objet d'une facturation supplémentaire par chambre.

Les retards à l'arrivée ou les départs anticipés ne peuvent donner lieu à remboursement que dans les conditions prévues par le tarif réservé.

Il est interdit d'emporter tout objet appartenant à l'Hôtel. En cas d'emport involontaire, le Client devra en informer l'Hôtel et restituer l'objet concerné. À défaut, l'objet pourra être facturé.

En cas d'oubli d'un objet dans la chambre par le Client, ce dernier pourra demander à l'Hôtel de lui expédier l'objet à ses frais et selon le mode d'expédition choisi. L'Hôtel ne saurait être tenu responsable des conditions d'acheminement de l'objet par le transporteur choisi.

Bagagerie : les bagages et objets personnels déposés dans les espaces non prévus à cet effet restent sous la responsabilité du Client. Les règles légales relatives à la responsabilité des hôteliers demeurent applicables.`,
  },
  {
    number: "9",
    title: "Loi applicable",
    content: `Les présentes conditions générales de vente sont régies par la loi française.

En cas de litige non résolu amiablement, et sous réserve des dispositions légales impératives applicables au consommateur, les juridictions françaises compétentes pourront être saisies.`,
  },
];

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-4 pl-2 text-text-mid text-sm leading-relaxed list-disc">
          {line.slice(2)}
        </li>
      );
    }
    if (line === "") return <div key={i} className="h-3" />;
    return (
      <p key={i} className="text-text-mid text-sm leading-relaxed">
        {line}
      </p>
    );
  });
}

export default function CGVPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([{ name: "CGV", url: "https://www.leglamshotel.com/cgv" }])) }}
      />
      {/* Navbar placeholder space */}
      <div className="h-16" />

      <main id="top" className="bg-cream min-h-screen">
        {/* Header */}
        <div className="bg-bordeaux py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
              Glam&apos;s Hôtel Paris
            </p>
            <h1
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Conditions Générales de Vente
            </h1>
            <p className="text-white/70 text-sm mt-3">
              SAS Glam&apos;s Hôtel · 47 rue Beaunier, 75014 Paris
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-2xl border border-rose/20 p-6 mb-10 shadow-sm">
            <p className="text-xs font-semibold text-bordeaux uppercase tracking-widest mb-4">
              Sommaire
            </p>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {sections.map((s) => (
                <li key={s.number}>
                  <a
                    href={`#section-${s.number}`}
                    className="flex items-center gap-2 text-sm text-text-mid hover:text-bordeaux transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full bg-blush text-bordeaux text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-bordeaux group-hover:text-white transition-colors">
                      {s.number}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <section
                key={s.number}
                id={`section-${s.number}`}
                className="bg-white rounded-2xl border border-rose/20 p-7 shadow-sm scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-bordeaux text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {s.number}
                  </span>
                  <h2
                    className="text-xl font-bold text-text-dark"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-1 pl-12">
                  {renderContent(s.content)}
                </div>
              </section>
            ))}
          </div>

          {/* Back to top + home */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-bordeaux hover:text-bordeaux-dark font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <span className="text-rose/30 hidden sm:block">·</span>
            <a
              href="#top"
              className="text-sm text-text-mid hover:text-bordeaux transition-colors"
            >
              Haut de page ↑
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
