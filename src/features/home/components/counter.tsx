import { observer } from "mobx-react";
import { Button, Text, YStack } from "tamagui";

import { useStores } from "../../../stores";

const Counter = observer(() => {
  const { counter } = useStores();
  return (
    <YStack alignItems="center" space="$3" marginTop="$4">
      <Button onPress={counter.inc}>increment</Button>
      <Text>count is {counter.value}</Text>
    </YStack>
  );
});
export default Counter;
