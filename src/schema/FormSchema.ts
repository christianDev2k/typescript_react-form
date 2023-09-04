import { z } from 'zod';
export const FormSchema = z.object({
    name: z
        .string()
        .nonempty('Vui lòng nhập tên của bạn')
        .regex(
            /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            'Vui lòng nhập họ và tên đúng định dạng'
        ),
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng của email'),
    phoneNumber: z
        .string()
        .nonempty('Vui lòng nhập số điện thoại')
        .regex(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, 'Vui lòng nhập số điện thoại đúng định dạng'),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
