import React, { FC, useCallback, useEffect } from 'react';
import { AppState, StyleProp, ViewStyle } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

interface AnimatedViewProps {
    animatedType?:
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight';
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    delay?: number;
    duration?: number;
}

const AnimatedView: FC<AnimatedViewProps> = ({
    animatedType,
    children,
    style,
    delay = 0,
    duration = 500
}) => {
    const opacity = useSharedValue(0);

    const translateY = useSharedValue(
        animatedType === 'fadeInUp'
            ? 20
            : animatedType === 'fadeInDown'
                ? -20
                : 0,
    );

    const translateX = useSharedValue(
        animatedType === 'fadeInLeft'
            ? -20
            : animatedType === 'fadeInRight'
                ? 20
                : 0,
    );

    const runAnimation = useCallback(() => {
        opacity.value = withDelay(delay, withTiming(1, { duration }));
        translateX.value = withDelay(delay, withTiming(0, { duration }));
        translateY.value = withDelay(delay, withTiming(0, { duration }));
    }, [opacity, translateX, translateY, delay, duration]);

    useEffect(() => {
        runAnimation();
    }, [runAnimation]);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextState) => {
            if (nextState === 'active') {
                runAnimation();
            }
        });
        return () => subscription.remove();
    }, [runAnimation]);

    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            runAnimation();
        }
    }, [isFocused, runAnimation]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    return (
        <Animated.View style={[animatedStyle, style]} pointerEvents='box-none'>
            {children}
        </Animated.View>
    );
};

export default React.memo(AnimatedView);