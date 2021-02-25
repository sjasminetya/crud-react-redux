const UserValidation = (values) => {
    const error = {}

    if (!values.nama || values.nama === '') {
        error.nama = 'Nama harus di isi'
    }

    if (!values.alamat || values.alamat === '') {
        error.alamat = 'Alamat harus di isi'
    }

    if (!values.umur || values.umur === '') {
        error.umur = 'Umur harus di isi'
    }

    if (!values.nohp || values.nohp === '') {
        error.nohp = 'No HP harus di isi'
    }

    return error
}

export default UserValidation
