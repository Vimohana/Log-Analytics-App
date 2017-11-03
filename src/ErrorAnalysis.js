import UploadFile from './UploadFile';
import ErrorTable from './ErrorTable';
import axios from 'axios';


class ErrorAnalysis extends Component {

    constructor(props) {
        super(props);
        let filesArr;
        this.state = {
            files: [],
            lines: []
        };

        axios.get('/files.php').then((response) => {
            filesArr = response.data;
            this.setState({
                files: filesArr,
            });
        });

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(changeEvent) {
        var url = '/file.php?name=' + encodeURIComponent(changeEvent.target.value);
        let lineArray = [];

        axios.get(url).then((response) => {

            lineArray = response.data;
            lineArray.forEach(function (element) {
                element.time = new Date(Date.parse('2017 ' + element.time));
            });

            this.setState({
                lines: lineArray
            });
        });
    }


    renderFiles(files) {
        let fileArray = [];
        var rbtnId = "";

        for (var i = 0; i < files.length; i++) {
            rbtnId = "r-btn" + i;
            fileArray.push(<label><input id={rbtnId} type="radio" name="file" value={files[i].name} onChange={this.handleChange} /> {files[i].name}</label>);
        }
        return fileArray;
    }
}