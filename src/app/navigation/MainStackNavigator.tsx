import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { MainStackParamList } from "./types";
import IntroScreen from "@/features/intro/presentation/IntroScreen";
import TransactionsScreen from "@/features/transactions/presentation/TransactionsScreen";
import TransactionDetailScreen from "@/features/transactions/presentation/TransactionDetailScreen";

const MainStack = createNativeStackNavigator<MainStackParamList, "MainStack">()

const MainStackNavigator: FC = () => (
    <MainStack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Intro" component={IntroScreen} />
        <MainStack.Screen name="Transactions" component={TransactionsScreen} />
        <MainStack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </MainStack.Navigator>
)

export default MainStackNavigator