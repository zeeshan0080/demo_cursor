"use client";

import { useEffect, type PropsWithChildren } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: PropsWithChildren) {
	useEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
			syncTouch: true,
			duration: 0.75,
			easing: (x: number) => 1 - Math.pow(1 - x, 2),
		});

		let animationFrame: number;
		const raf = (time: number) => {
			lenis.raf(time);
			animationFrame = requestAnimationFrame(raf);
		};
		animationFrame = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(animationFrame);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}


