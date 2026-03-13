"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { IHeroData } from "@/Interfaces/heroes";

import HeroPicture from "../HeroesPicture";

import styles from "./heroesList.module.scss";

interface HeroesListClientProps {
  heroes: IHeroData[];
}

export default function HeroesListClient({ heroes }: HeroesListClientProps) {
  return (
    <motion.section
      className={styles.heroes}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {heroes.map((hero) => (
        <motion.div
          key={hero.id}
          className={`${styles.imageContainer} ${styles[hero.id]}`}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href={`/hero/${hero.id}`}
            aria-label={`Ver detalhes de ${hero.name}`}
          >
            <HeroPicture hero={hero} />
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
}
