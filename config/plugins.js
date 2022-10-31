module.exports = ({ env }) => {
    return {
        ckeditor: true,
		upload: {
			config: {
				provider: 'cloudinary',
				providerOptions: {
					cloud_name: env('CLOUDINARY_NAME'),
					api_key: env('CLOUDINARY_KEY'),
					api_secret: env('CLOUDINARY_SECRET'),
				},
				actionOptions: {
					upload: {
					},
					uploadStream: {
						folder: 'jazzhands',
					},
					delete: {},
				},
			},
		},
    }
}