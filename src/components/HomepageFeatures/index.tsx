import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Moto',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium perspiciatis autem quia odit eius unde dignissimos atque dolorem beatae! Non quidem dolores velit sapiente perferendis eligendi tempore, minus quisquam.
      </>
    ),
  },
  {
    title: 'Vision',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium perspiciatis autem quia odit eius unde dignissimos atque dolorem beatae! Non quidem dolores velit sapiente perferendis eligendi tempore, minus quisquam.
      </>
    ),
  },
  {
    title: 'Mission',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium perspiciatis autem quia odit eius unde dignissimos atque dolorem beatae! Non quidem dolores velit sapiente perferendis eligendi tempore, minus quisquam.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
