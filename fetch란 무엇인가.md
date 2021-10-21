# fetch란 무엇인가.

#### fetch는 api를 불러오고, 정보를 내보내 주기도 하는 함수이다. fetch 함수에 쓰여지는 method 는 get과 post가 있는데 설정을 따로 안해주면 기본적으로 get으로 설정이 되어있다.

```
if(url) {
	fetch(url).then(function(response){return response.text();}).then(function(html){
    	document.getElementById('info').innerHTML = html;
    });
}
```





출처: https://itkjspo56.tistory.com/115 [로마 살았던 남자의 IT이야기]

## Axios란?

- 쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용합니다.
  \- 저는 AJAX보다 AXIOS를 훨씬 많이 사용합니다.

- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.

- ```javascript
  axios.get('https://localgost:3000/sewon/user')
    .then((Response)=>{console.log(Response.data)})
    .catch((Error)=>{console.log(Error)})
  ```

