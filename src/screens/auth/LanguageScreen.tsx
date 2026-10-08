import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Rect } from 'react-native-svg';

import { useTheme } from '../../theme/ThemeProvider';
import { IThemeColors } from '../../theme/ThemeTypes';
import { IRootNavigationProp } from '../../navigation/navigation.types';

const { width } = Dimensions.get('window');

interface ILanguageItem {
    id: string;
    name: string;
    nativeName: string;
    code: string;
    icon: string;
}

const PRIMARY_LANGUAGES: ILanguageItem[] = [
    { id: 'en', name: 'English', nativeName: 'English', code: 'EN', icon: 'circle-flags:gb' },
    { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी', code: 'HI', icon: 'circle-flags:in' },
    { id: 'es', name: 'Spanish', nativeName: 'Español', code: 'ES', icon: 'circle-flags:es' },
    { id: 'fr', name: 'French', nativeName: 'Français', code: 'FR', icon: 'circle-flags:fr' },
    { id: 'ja', name: 'Japanese', nativeName: '日本語', code: 'JA', icon: 'circle-flags:jp' },
    { id: 'de', name: 'German', nativeName: 'Deutsch', code: 'DE', icon: 'circle-flags:de' },
];

const ADDITIONAL_LANGUAGES: ILanguageItem[] = [
    { id: 'ko', name: 'Korean', nativeName: '한국어', code: 'KO', icon: 'circle-flags:kr' },
    { id: 'pt', name: 'Portuguese', nativeName: 'Português', code: 'PT', icon: 'circle-flags:pt' },
    { id: 'it', name: 'Italian', nativeName: 'Italiano', code: 'IT', icon: 'circle-flags:it' },
    { id: 'ar', name: 'Arabic', nativeName: 'العربية', code: 'AR', icon: 'circle-flags:ae' },
    { id: 'zh', name: 'Mandarin', nativeName: '中文', code: 'ZH', icon: 'circle-flags:cn' },
    { id: 'ru', name: 'Russian', nativeName: 'Русский', code: 'RU', icon: 'circle-flags:ru' },
];

const ALL_LANGUAGES = [...PRIMARY_LANGUAGES, ...ADDITIONAL_LANGUAGES];

const LanguageScreen = () => {
    const navigation = useNavigation<IRootNavigationProp>();
    const { colors, dark } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);

    const [selectedLanguageId, setSelectedLanguageId] = useState<string>('en');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Filter languages based on search query
    const filteredLanguages = useMemo(() => {
        if (!searchQuery.trim()) {
            return PRIMARY_LANGUAGES;
        }
        const query = searchQuery.toLowerCase().trim();
        return ALL_LANGUAGES.filter(
            (lang) =>
                lang.name.toLowerCase().includes(query) ||
                lang.nativeName.toLowerCase().includes(query) ||
                lang.code.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const activeLanguage = useMemo(
        () => ALL_LANGUAGES.find((lang) => lang.id === selectedLanguageId) || PRIMARY_LANGUAGES[0],
        [selectedLanguageId]
    );

    const handleContinue = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />

            {/* Ambient Background Glow Elements from Theme */}
            <View pointerEvents="none" style={styles.ambientContainer}>
                <View style={styles.topPurpleGlow} />
                <View style={styles.centerCyanGlow} />
                <View style={styles.bottomPinkGlow} />
                <View style={styles.centerPurpleAura} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.keyboardContainer}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Header Section */}
                    <View style={styles.headerContainer}>
                        {/* Futuristic Tag / Pill Badge */}
                        <View style={styles.badgeWrapper}>
                            <View style={styles.badgeGlowBorder}>
                                <Iconify icon="lucide:sparkles" size={12} color={colors.badgeText} />
                                <Text style={styles.badgeText}>AURA VIBE • STEP 01</Text>
                            </View>
                        </View>

                        {/* Sleek Typography */}
                        <Text style={styles.titleText}>Choose Your Vibe</Text>

                        {/* Muted Subtitle */}
                        <Text style={styles.subtitleText}>
                            Select your preferred language to customize your personal feed and vibe.
                        </Text>
                    </View>

                    {/* Search Bar: Placed directly below the Subtitle */}
                    <View style={styles.searchSection}>
                        <View style={styles.searchBarContainer}>
                            <Iconify icon="lucide:search" size={18} color={colors.searchIconColor} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Find your language..."
                                placeholderTextColor={colors.searchPlaceholder}
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                autoCapitalize="none"
                                autoCorrect={false}
                                selectionColor={colors.neonPurple}
                            />
                            {searchQuery.length > 0 && (
                                <TouchableOpacity
                                    style={styles.clearSearchBtn}
                                    onPress={() => setSearchQuery('')}
                                    activeOpacity={0.7}
                                >
                                    <Iconify icon="lucide:x" size={12} color={colors.searchClearText} />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* Middle Section: 2-Column Grid of 6 Glassmorphism Pill-shaped Buttons */}
                    <View style={styles.gridSection}>
                        <View style={styles.gridContainer}>
                            {filteredLanguages.map((item) => {
                                const isActive = item.id === selectedLanguageId;

                                if (isActive) {
                                    // Active State: True Smooth SVG Linear Gradient Border + Sparkle Iconify
                                    return (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={styles.activePillOuterGlow}
                                            activeOpacity={0.88}
                                            onPress={() => setSelectedLanguageId(item.id)}
                                        >
                                            <View style={styles.neonGradientBorderFrame}>
                                                {/* Seamless SVG Linear Gradient Border (No visible seam lines!) */}
                                                <Svg
                                                    height="100%"
                                                    width="100%"
                                                    style={styles.absoluteSvgFill}
                                                >
                                                    <Defs>
                                                        <SvgLinearGradient
                                                            id={`pillGrad-${item.id}`}
                                                            x1="0%"
                                                            y1="0%"
                                                            x2="100%"
                                                            y2="0%"
                                                        >
                                                            <Stop offset="0%" stopColor={colors.neonCyan} />
                                                            <Stop offset="50%" stopColor={colors.neonPurple} />
                                                            <Stop offset="100%" stopColor={colors.neonPink} />
                                                        </SvgLinearGradient>
                                                    </Defs>
                                                    <Rect
                                                        width="100%"
                                                        height="100%"
                                                        rx={32}
                                                        ry={32}
                                                        fill={`url(#pillGrad-${item.id})`}
                                                    />
                                                </Svg>

                                                {/* Inner Glass Cutout */}
                                                <View style={styles.activePillInner}>
                                                    <View style={styles.pillLeftContent}>
                                                        <Iconify icon={item.icon} size={22} />
                                                        <View style={styles.pillTextContainer}>
                                                            <View style={styles.titleWithSparkle}>
                                                                <Text style={styles.activeLanguageName}>
                                                                    {item.name}
                                                                </Text>
                                                                <Iconify
                                                                    icon="lucide:sparkles"
                                                                    size={13}
                                                                    color={colors.neonLavender}
                                                                />
                                                            </View>
                                                            <Text style={styles.activeNativeName}>
                                                                {item.nativeName}
                                                            </Text>
                                                        </View>
                                                    </View>

                                                    <View style={styles.activeBadgeIndicator}>
                                                        <View style={styles.activeDot} />
                                                        <Text style={styles.activeCodeText}>{item.code}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }

                                // Inactive Glassmorphism Pill-shaped Button
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={styles.inactivePillButton}
                                        activeOpacity={0.75}
                                        onPress={() => setSelectedLanguageId(item.id)}
                                    >
                                        <View style={styles.inactivePillInner}>
                                            <View style={styles.pillLeftContent}>
                                                <Iconify icon={item.icon} size={22} />
                                                <View style={styles.pillTextContainer}>
                                                    <Text style={styles.inactiveLanguageName}>
                                                        {item.name}
                                                    </Text>
                                                    <Text style={styles.inactiveNativeName}>
                                                        {item.nativeName}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={styles.inactiveBadgeIndicator}>
                                                <Text style={styles.inactiveCodeText}>{item.code}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/* Empty search fallback */}
                        {filteredLanguages.length === 0 && (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No languages found matching "{searchQuery}"</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>

                {/* Absolute Bottom CTA Button: Smooth Seamless SVG Linear Gradient (No vertical seam lines!) */}
                <View style={styles.bottomCtaSection}>
                    <TouchableOpacity
                        style={styles.ctaGlowShadow}
                        activeOpacity={0.85}
                        onPress={handleContinue}
                    >
                        <View style={styles.ctaButtonWrapper}>
                            {/* Seamless SVG Linear Gradient */}
                            <Svg
                                height="100%"
                                width="100%"
                                style={styles.absoluteSvgFill}
                            >
                                <Defs>
                                    <SvgLinearGradient
                                        id="ctaGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <Stop offset="0%" stopColor={colors.neonCyan} />
                                        <Stop offset="30%" stopColor={colors.neonSky} />
                                        <Stop offset="65%" stopColor={colors.neonPurple} />
                                        <Stop offset="100%" stopColor={colors.neonPink} />
                                    </SvgLinearGradient>
                                </Defs>
                                <Rect
                                    width="100%"
                                    height="100%"
                                    rx={28}
                                    ry={28}
                                    fill="url(#ctaGradient)"
                                />
                            </Svg>

                            {/* Ultra-sleek Glass Sheen */}
                            <View style={styles.ctaGlassGloss} />

                            {/* CTA Content with Iconify arrow */}
                            <View style={styles.ctaContentRow}>
                                <Text style={styles.ctaTitle}>
                                    Continue with {activeLanguage.name}
                                </Text>
                                <View style={styles.ctaArrowCircle}>
                                    <Iconify
                                        icon="lucide:arrow-right"
                                        size={15}
                                        color={colors.ctaArrowColor}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LanguageScreen;

const createStyles = (colors: IThemeColors) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: colors.background,
        },
        keyboardContainer: {
            flex: 1,
        },
        scrollContent: {
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 110,
        },

        /* =======================================================
           AMBIENT BACKGROUND GLOWS (THEME DRIVEN)
           ======================================================= */
        ambientContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
        },
        topPurpleGlow: {
            position: 'absolute',
            top: -60,
            right: -50,
            width: 320,
            height: 320,
            borderRadius: 160,
            backgroundColor: colors.glowTopPurple,
        },
        centerCyanGlow: {
            position: 'absolute',
            top: '32%',
            left: -90,
            width: 260,
            height: 260,
            borderRadius: 130,
            backgroundColor: colors.glowCenterCyan,
        },
        bottomPinkGlow: {
            position: 'absolute',
            bottom: -60,
            left: '20%',
            width: 300,
            height: 300,
            borderRadius: 150,
            backgroundColor: colors.glowBottomPink,
        },
        centerPurpleAura: {
            position: 'absolute',
            top: '18%',
            alignSelf: 'center',
            width: 280,
            height: 280,
            borderRadius: 140,
            backgroundColor: colors.glowCenterAura,
        },

        /* =======================================================
           HEADER SECTION
           ======================================================= */
        headerContainer: {
            marginTop: 12,
            marginBottom: 20,
            alignItems: 'center',
        },
        badgeWrapper: {
            marginBottom: 16,
        },
        badgeGlowBorder: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 999,
            backgroundColor: colors.badgeBackground,
            borderWidth: 1,
            borderColor: colors.badgeBorder,
            gap: 6,
        },
        badgeText: {
            color: colors.badgeText,
            fontSize: 11,
            fontWeight: '700',
            letterSpacing: 1.5,
        },
        titleText: {
            color: colors.primaryText,
            fontSize: 32,
            fontWeight: '800',
            letterSpacing: -0.6,
            textAlign: 'center',
            marginBottom: 10,
        },
        subtitleText: {
            color: colors.secondaryText,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 20,
            textAlign: 'center',
            maxWidth: 290,
        },

        /* =======================================================
           SEMI-TRANSPARENT SEARCH BAR
           ======================================================= */
        searchSection: {
            marginTop: 0,
            marginBottom: 22,
        },
        searchBarContainer: {
            height: 54,
            borderRadius: 27,
            backgroundColor: colors.searchBackground,
            borderWidth: 1,
            borderColor: colors.searchBorder,
            borderTopColor: colors.searchBorderHighlight,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 18,
            gap: 10,
        },
        searchInput: {
            flex: 1,
            height: '100%',
            color: colors.primaryText,
            fontSize: 15,
            fontWeight: '400',
            paddingVertical: 0,
        },
        clearSearchBtn: {
            width: 22,
            height: 22,
            borderRadius: 11,
            backgroundColor: colors.searchClearBackground,
            alignItems: 'center',
            justifyContent: 'center',
        },

        /* =======================================================
           2-COLUMN GRID OF GLASSMORPHISM PILL BUTTONS
           ======================================================= */
        gridSection: {
            marginBottom: 24,
        },
        gridContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            rowGap: 14,
        },
        pillLeftContent: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
        },
        pillTextContainer: {
            justifyContent: 'center',
            flex: 1,
        },

        // Inactive Pill Button
        inactivePillButton: {
            width: (width - 40 - 12) / 2,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.glassCardBackground,
            borderWidth: 1,
            borderColor: colors.glassCardBorder,
            borderTopColor: colors.glassCardBorderHighlight,
            paddingHorizontal: 14,
            justifyContent: 'center',
        },
        inactivePillInner: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        inactiveLanguageName: {
            color: colors.primaryText,
            fontSize: 14,
            fontWeight: '600',
            letterSpacing: -0.2,
        },
        inactiveNativeName: {
            color: colors.pillNativeText,
            fontSize: 11,
            fontWeight: '400',
            marginTop: 2,
        },
        inactiveBadgeIndicator: {
            backgroundColor: colors.pillCodeBadgeBackground,
            paddingHorizontal: 7,
            paddingVertical: 3,
            borderRadius: 8,
            marginLeft: 4,
        },
        inactiveCodeText: {
            color: colors.pillCodeText,
            fontSize: 11,
            fontWeight: '600',
        },

        // Active Pill Button: Smooth Gradient Border + Sparkle Iconify
        activePillOuterGlow: {
            width: (width - 40 - 12) / 2,
            height: 64,
            borderRadius: 32,
            shadowColor: colors.activeCardGlow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.9,
            shadowRadius: 16,
            elevation: 12,
        },
        neonGradientBorderFrame: {
            flex: 1,
            borderRadius: 32,
            padding: 2,
            overflow: 'hidden',
            position: 'relative',
        },
        absoluteSvgFill: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        activePillInner: {
            flex: 1,
            borderRadius: 30,
            backgroundColor: colors.activeCardCutout,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 14,
        },
        titleWithSparkle: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
        },
        activeLanguageName: {
            color: colors.primaryText,
            fontSize: 14,
            fontWeight: '700',
            letterSpacing: -0.2,
        },
        activeNativeName: {
            color: colors.neonLavender,
            fontSize: 11,
            fontWeight: '500',
            marginTop: 2,
        },
        activeBadgeIndicator: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.activeBadgeBackground,
            borderColor: colors.activeBadgeBorder,
            borderWidth: 1,
            paddingHorizontal: 7,
            paddingVertical: 3,
            borderRadius: 10,
            gap: 4,
            marginLeft: 4,
        },
        activeDot: {
            width: 5,
            height: 5,
            borderRadius: 3,
            backgroundColor: colors.activeBadgeDot,
        },
        activeCodeText: {
            color: colors.activeBadgeText,
            fontSize: 11,
            fontWeight: '700',
        },

        emptyContainer: {
            paddingVertical: 24,
            alignItems: 'center',
        },
        emptyText: {
            color: colors.secondaryText,
            fontSize: 14,
        },

        /* =======================================================
           ABSOLUTE BOTTOM GLOWING NEON GRADIENT CTA BUTTON
           ======================================================= */
        bottomCtaSection: {
            position: 'absolute',
            bottom: 24,
            left: 20,
            right: 20,
        },
        ctaGlowShadow: {
            width: '100%',
            height: 56,
            borderRadius: 28,
            shadowColor: colors.ctaGlowColor,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.8,
            shadowRadius: 20,
            elevation: 16,
        },
        ctaButtonWrapper: {
            flex: 1,
            borderRadius: 28,
            overflow: 'hidden',
            position: 'relative',
            justifyContent: 'center',
        },
        ctaGlassGloss: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '48%',
            backgroundColor: 'rgba(255, 255, 255, 0.16)',
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
        },
        ctaContentRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 24,
            gap: 12,
        },
        ctaTitle: {
            color: colors.ctaTextColor,
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 0.2,
        },
        ctaArrowCircle: {
            width: 26,
            height: 26,
            borderRadius: 13,
            backgroundColor: colors.ctaArrowCircleBackground,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });