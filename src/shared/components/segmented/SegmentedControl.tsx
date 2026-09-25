import React, { memo } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "@/shared/theme/colors";

export interface SegmentOption<T extends string> {
    label: string;
    value: T;
}

interface SegmentedControlProps<T extends string> {
    options: readonly SegmentOption<T>[];
    value: T;
    onChange: (value: T) => void;
    style?: StyleProp<ViewStyle>;
}

function SegmentedControl<T extends string>({
    options,
    value,
    onChange,
    style,
}: SegmentedControlProps<T>) {
    return (
        <View style={[styles.track, style]} accessibilityRole="tablist">
            {options.map((option) => {
                const isSelected = option.value === value;
                return (
                    <Pressable
                        key={option.value}
                        accessibilityRole="tab"
                        accessibilityState={{ selected: isSelected }}
                        onPress={() => onChange(option.value)}
                        style={[styles.segment, isSelected && styles.segmentSelected]}
                    >
                        <Text style={[styles.label, isSelected && styles.labelSelected]} numberOfLines={1}>
                            {option.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        flexDirection: "row",
        padding: 4,
        borderRadius: 12,
        backgroundColor: colors.segmentTrack,
    },
    segment: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderRadius: 9,
    },
    segmentSelected: {
        backgroundColor: colors.white,
        shadowColor: colors.navy,
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
    },
    label: {
        color: colors.textSecondary,
        fontSize: 16,
        fontWeight: "600",
    },
    labelSelected: {
        color: colors.textPrimary,
        fontWeight: "700",
    },
});

export default memo(SegmentedControl) as typeof SegmentedControl;
