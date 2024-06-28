import { Card, CardHeader, CardFooter, CardBody, Divider, Heading, Text ,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box} from "@chakra-ui/react";
import moment from "moment/moment";

export default function Order({id, sendersCity, sendersAddress, recipientsCity, recipientsAddress, loadWeight, pickupDate, createdAt}) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                <Box flex="1" textAlign="left">
                    Заказ {id}
                </Box>
                <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text><strong>Город отправителя:</strong> {sendersCity}</Text>
                <Text><strong>Адрес отправителя:</strong> {sendersAddress}</Text>
                <Text><strong>Город получателя:</strong> {recipientsCity}</Text>
                <Text><strong>Адрес получателя:</strong> {recipientsAddress}</Text>
                <Text><strong>Вес груза:</strong> {loadWeight} грамм</Text>
                <Text><strong>Дата забора:</strong> {moment(pickupDate).format("h:mm:ss DD.MM.YYYY")}</Text>
                <Divider borderColor="gray" my={2} />
                <Text><strong>Создано:</strong> {moment(createdAt).format("HH:mm:ss DD.MM.YYYY")}</Text>
            </AccordionPanel>
        </AccordionItem>
    );
}