import { Text } from "@lacosdeluana/design-system/componets/Text";
import { sum } from "@lacosdeluana/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <Text tag={"h1"}>Home</Text>
      <Text tag={"p"}>
        importando modulo local @lacosdeluana/utils/math/sum sum(2,2):
        {sum(2, 2)}
      </Text>
    </main>
  );
}
