import { Text } from "react-native"

type Props = {
    text: string
}

const MyText = ({ text }: Props) => {
    return <Text>{text}</Text>
}

export default MyText;