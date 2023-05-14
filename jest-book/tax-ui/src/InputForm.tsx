import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react'

const schema = z
  .object({
    yearsOfService: z.number().int().gte(1).lte(100),
    isDisability: z.boolean(),
    isOfficer: z
      .string()
      .transform((val) => (Number(val) === 1 ? true : false)),
    severancePay: z.number().int().gte(0).lte(1_000_000_000_000),
  })
  .strict()

export type FormInputs = z.infer<typeof schema>

type InputFormProps = CardProps & {
  onInputFormSubmit: SubmitHandler<FormInputs>
}

export const InputForm = ({ onInputFormSubmit, ...props }: InputFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // バリデーションエラーの情報
  } = useForm<FormInputs>({
    resolver: zodResolver(schema), // zodでバリデーションを実行する
    mode: 'onChange', // 入力中にバリデーションを実行
  })

  return (
    <Card w="400px" {...props}>
      <CardHeader>
        <Center>
          <Heading as="h3" size="md">
            退職金情報を入力してください
          </Heading>
        </Center>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit(onInputFormSubmit)}
          noValidate // RHFでバリデーションんを実行するため、デフォルトのバリデーションをオフにする
        >
          <VStack spacing={5}>
            <FormControl
              isInvalid={errors.yearsOfService !== undefined} // isInvalid = trueの場合、エラー表示(Chakra UIのプロパティ)
            >
              <FormLabel fontWeight="bold">勤続年数</FormLabel>
              <HStack>
                <InputGroup w="120px">
                  <Input
                    type="number"
                    defaultValue="10"
                    // stringの入力値をnumberとしてzodに渡す
                    {...register('yearsOfService', { valueAsNumber: true })}
                  />
                  <InputRightAddon>年</InputRightAddon>
                </InputGroup>
                <FormHelperText>1年未満の端数は切り上げ</FormHelperText>
              </HStack>
              {/* FromControlのisInvalidがtrueの場合に表示される */}
              <FormErrorMessage>
                有効な勤続年数を表示してください
              </FormErrorMessage>
              <Spacer />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">退職基因</FormLabel>
              <Checkbox {...register('isDisability')}>
                障害者となったことに直接基因して退職した
              </Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">役員等以外か役員等か</FormLabel>
              <RadioGroup defaultValue="0">
                <Stack direction="row">
                  <Radio value="0" {...register('isOfficer')}>
                    役員等以外
                  </Radio>
                  <Radio value="1" {...register('isOfficer')}>
                    役員等
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl isInvalid={errors.severancePay !== undefined}>
              <FormLabel fontWeight="bold">退職金</FormLabel>
              <InputGroup w="200px">
                <Input
                  type="number"
                  defaultValue="5000000"
                  {...register('severancePay', { valueAsNumber: true })}
                />
                <InputRightAddon>円</InputRightAddon>
              </InputGroup>
              <FormErrorMessage>
                有効な退職金を入力してください
              </FormErrorMessage>
            </FormControl>

            <Button colorScheme="blue" alignSelf="flex-end" type="submit">
              所得税を計算する
            </Button>
          </VStack>
        </form>
      </CardBody>
    </Card>
  )
}
