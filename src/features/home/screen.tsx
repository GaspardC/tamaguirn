import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { H1, Paragraph, Separator, YStack } from "tamagui";

import Counter from "./components/counter";
import { LinkToUser } from "./components/link-to-user";

export const HomeScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
  const { t } = useTranslation("home");

  return (
    <YStack bc="$background" f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">{t("welcome")}</H1>
        <Paragraph ta="center">{t("message")}</Paragraph>
        <Separator />
      </YStack>

      <LinkToUser navigation={navigation} />
      <Counter />
    </YStack>
  );
};
