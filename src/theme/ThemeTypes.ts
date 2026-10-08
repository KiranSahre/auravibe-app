export interface IThemeColors {
    // Core Base Colors
    background: string;
    secondaryBackground: string;
    primaryText: string;
    secondaryText: string;
    borderColor: string;
    blue: string;

    // Neon & Accent Colors
    neonCyan: string;
    neonSky: string;
    neonIndigo: string;
    neonPurple: string;
    neonFuchsia: string;
    neonPink: string;
    neonLavender: string;

    // Ambient Atmosphere Glows
    glowTopPurple: string;
    glowCenterCyan: string;
    glowBottomPink: string;
    glowCenterAura: string;

    // Badge Colors
    badgeBackground: string;
    badgeBorder: string;
    badgeText: string;

    // Glassmorphism Card/Pill Colors
    glassCardBackground: string;
    glassCardBorder: string;
    glassCardBorderHighlight: string;
    pillNativeText: string;
    pillCodeBadgeBackground: string;
    pillCodeText: string;

    // Active Card State Colors
    activeCardCutout: string;
    activeCardGlow: string;
    activeBadgeBackground: string;
    activeBadgeBorder: string;
    activeBadgeDot: string;
    activeBadgeText: string;

    // Search Bar Colors
    searchBackground: string;
    searchBorder: string;
    searchBorderHighlight: string;
    searchPlaceholder: string;
    searchIconColor: string;
    searchClearBackground: string;
    searchClearText: string;

    // CTA Button Colors
    ctaButtonBackground: string;
    ctaGlowColor: string;
    ctaTextColor: string;
    ctaArrowCircleBackground: string;
    ctaArrowColor: string;
}

export interface ITheme {
    name: 'light' | 'dark' | 'automatic';
    dark: boolean;
    colors: IThemeColors;
}