import React, { FC } from "react";
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { Search, X } from "lucide-react-native";
import IconButton from "@/shared/components/buttons/IconButton";
import { colors } from "@/shared/theme/colors";

interface SearchInputProps extends Omit<TextInputProps, "style" | "onChangeText" | "value"> {
    value: string;
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
}

const SearchInput: FC<SearchInputProps> = ({ value, onChangeText, style, placeholder = "Search", ...rest }) => {
    return (
        <View style={[styles.container, style]}>
            <Search size={18} color={colors.textMuted} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.textMuted}
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="search"
                accessibilityLabel={placeholder}
                {...rest}
            />
            {value.length > 0 && (
                <IconButton
                    size={28}
                    accessibilityLabel="Clear search"
                    onPress={() => onChangeText("")}
                    icon={<X size={16} color={colors.textMuted} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        minHeight: 44,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.white,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        paddingVertical: 10,
        color: colors.textPrimary,
        fontSize: 16,
    },
});

export default React.memo(SearchInput);
