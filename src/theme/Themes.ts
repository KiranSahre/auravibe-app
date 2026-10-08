import { ITheme } from './ThemeTypes';

export const LightTheme: ITheme = {
    name: 'light',
    dark: false,
    colors: {
        // Core Base Colors
        background: '#F8FAFC',
        secondaryBackground: '#FFFFFF',
        primaryText: '#0F172A',
        secondaryText: '#64748B',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        blue: '#1877F2',

        // Neon & Accent Colors
        neonCyan: '#0284C7',
        neonSky: '#0EA5E9',
        neonIndigo: '#6366F1',
        neonPurple: '#7C3AED',
        neonFuchsia: '#C026D3',
        neonPink: '#DB2777',
        neonLavender: '#8B5CF6',

        // Ambient Atmosphere Glows
        glowTopPurple: 'rgba(124, 58, 237, 0.09)',
        glowCenterCyan: 'rgba(14, 165, 233, 0.07)',
        glowBottomPink: 'rgba(219, 39, 119, 0.07)',
        glowCenterAura: 'rgba(139, 92, 246, 0.05)',

        // Badge Colors
        badgeBackground: 'rgba(124, 58, 237, 0.10)',
        badgeBorder: 'rgba(124, 58, 237, 0.28)',
        badgeText: '#7C3AED',

        // Glassmorphism Card/Pill Colors
        glassCardBackground: 'rgba(255, 255, 255, 0.85)',
        glassCardBorder: 'rgba(0, 0, 0, 0.06)',
        glassCardBorderHighlight: 'rgba(255, 255, 255, 0.95)',
        pillNativeText: '#94A3B8',
        pillCodeBadgeBackground: 'rgba(0, 0, 0, 0.04)',
        pillCodeText: '#64748B',

        // Active Card State Colors
        activeCardCutout: '#FAF5FF',
        activeCardGlow: '#7C3AED',
        activeBadgeBackground: 'rgba(124, 58, 237, 0.14)',
        activeBadgeBorder: 'rgba(219, 39, 119, 0.35)',
        activeBadgeDot: '#0284C7',
        activeBadgeText: '#DB2777',

        // Search Bar Colors
        searchBackground: 'rgba(255, 255, 255, 0.90)',
        searchBorder: 'rgba(0, 0, 0, 0.08)',
        searchBorderHighlight: 'rgba(255, 255, 255, 1.0)',
        searchPlaceholder: 'rgba(100, 116, 139, 0.70)',
        searchIconColor: '#64748B',
        searchClearBackground: 'rgba(0, 0, 0, 0.08)',
        searchClearText: '#0F172A',

        // CTA Button Colors
        ctaButtonBackground: '#7C3AED',
        ctaGlowColor: '#DB2777',
        ctaTextColor: '#FFFFFF',
        ctaArrowCircleBackground: 'rgba(255, 255, 255, 0.25)',
        ctaArrowColor: '#FFFFFF',
    },
};

export const DarkTheme: ITheme = {
    name: 'dark',
    dark: true,
    colors: {
        // Core Base Colors
        background: '#050508', // Pitch black
        secondaryBackground: '#0F0E17',
        primaryText: '#FFFFFF',
        secondaryText: '#94A3B8',
        borderColor: 'rgba(255, 255, 255, 0.10)',
        blue: '#1877F2',

        // Neon & Accent Colors
        neonCyan: '#00F2FE',
        neonSky: '#38BDF8',
        neonIndigo: '#818CF8',
        neonPurple: '#A855F7',
        neonFuchsia: '#D946EF',
        neonPink: '#FF007A',
        neonLavender: '#C084FC',

        // Ambient Atmosphere Glows
        glowTopPurple: 'rgba(121, 40, 202, 0.16)', // Subtle purple neon glow
        glowCenterCyan: 'rgba(0, 242, 254, 0.08)',
        glowBottomPink: 'rgba(255, 0, 122, 0.12)',
        glowCenterAura: 'rgba(139, 92, 246, 0.06)',

        // Badge Colors
        badgeBackground: 'rgba(168, 85, 247, 0.12)',
        badgeBorder: 'rgba(168, 85, 247, 0.35)',
        badgeText: '#D8B4FE',

        // Glassmorphism Card/Pill Colors
        glassCardBackground: 'rgba(255, 255, 255, 0.04)',
        glassCardBorder: 'rgba(255, 255, 255, 0.09)',
        glassCardBorderHighlight: 'rgba(255, 255, 255, 0.16)',
        pillNativeText: '#64748B',
        pillCodeBadgeBackground: 'rgba(255, 255, 255, 0.06)',
        pillCodeText: '#94A3B8',

        // Active Card State Colors
        activeCardCutout: '#0E0C18',
        activeCardGlow: '#A855F7',
        activeBadgeBackground: 'rgba(168, 85, 247, 0.22)',
        activeBadgeBorder: 'rgba(236, 72, 153, 0.45)',
        activeBadgeDot: '#00F2FE',
        activeBadgeText: '#F472B6',

        // Search Bar Colors
        searchBackground: 'rgba(255, 255, 255, 0.05)',
        searchBorder: 'rgba(255, 255, 255, 0.10)',
        searchBorderHighlight: 'rgba(255, 255, 255, 0.18)',
        searchPlaceholder: 'rgba(148, 163, 184, 0.60)',
        searchIconColor: '#94A3B8',
        searchClearBackground: 'rgba(255, 255, 255, 0.15)',
        searchClearText: '#FFFFFF',

        // CTA Button Colors
        ctaButtonBackground: '#A855F7',
        ctaGlowColor: '#EC4899',
        ctaTextColor: '#FFFFFF',
        ctaArrowCircleBackground: 'rgba(255, 255, 255, 0.22)',
        ctaArrowColor: '#FFFFFF',
    },
};

export const themes = {
    light: LightTheme,
    dark: DarkTheme,
    automatic: LightTheme,
};

export type ThemeKey = keyof typeof themes;