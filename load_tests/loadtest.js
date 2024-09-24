import http from 'k6/http';
import { sleep } from 'k6';

export let optioins = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '1m', target:50 },
        { duration: '30s', target: 100 },
        { duration: '1m', target: 0 },
    ]

};

export default function () {
    http.get('http://192.168.154.240:32337/feedback');
    sleep(1);
}