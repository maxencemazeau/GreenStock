import { HandThumbUpIcon, BoltIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Formule Énergisante',
    description:
      `Un mélange de vitamines et de nutriments conçu pour dynamiser votre journée.`,
    icon: BoltIcon,
  },
  {
    name: 'Soutien du Système Immunitaire',
    description:
      `Apporte une variété de vitamines essentielles pour renforcer votre système immunitaire.`,
    icon: HeartIcon,
  },
  {
    name: `Amélioration de l'Humeur`,
    description:
      `Des ingrédients soigneusement choisis pour soutenir une humeur positive et la santé cognitive.`,
    icon: HandThumbUpIcon,
  },
  {
    name: 'Propre & Sûr',
    description:
      `égétalien, sans gluten et non-OGM, élaboré sans additifs ni conservateurs artificiels.`,
    icon: GlobeAltIcon,
  },
]

export default function BulletPoint() {
  return (
    <div className="bg-white py-24 -mt-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Boost Végétalien de Vitamines Revitalisantes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Découvrez la transformation ultime de la santé et du bien-être avec notre complément de vitamines végétalien et sans gluten. 
          Soigneusement formulé avec des nutriments essentiels, ce supplément vise à augmenter votre énergie, promouvoir la santé immunitaire et améliorer votre humeur naturellement.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
