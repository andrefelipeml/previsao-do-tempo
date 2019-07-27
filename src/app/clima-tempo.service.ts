import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from 'src/models/state';
import { City } from 'src/models/city';
@Injectable({
  providedIn: 'root'
})
export class ClimaTempoService {

  url = 'https://apiadvisor.climatempo.com.br/api/v1/';
  token = '9612814012618a1ff330afef395aad92';
  constructor(public http: HttpClient) { }

  getStates(): Observable<State> {
    return this.http.get<State>('https://br-cidade-estado-nodejs.glitch.me/estados/');
  }

  getCities(stateId): Observable<City> {
    return this.http.get<City>(`https://br-cidade-estado-nodejs.glitch.me/estados/${stateId}/cidades?`);
}

  get(id) {
    // return this.http.get(`${this.url}forecast/locale/${id}/days/15?token=${this.token}`);
    return Observable.create( observer => {
      // tslint:disable-next-line: max-line-length
      observer.next({ 'id':4970, 'name':'Joinville','state':'SC','country':'BR  ',
      'meteogram':'http://apiadvisor.climatempo.com.br/api/v1/meteogram/locale/4970?token=9abca298b8c2f78e643146eafbb38340&hash=786128c67984a27ab523e8bb7d44d150','data':[{'date':'2019-07-26','date_br':'26/07/2019','humidity':{'min':62,'max':99,'dawn':{'min':94,'max':97},'morning':{'min':68,'max':93},'afternoon':{'min':62,'max':76},'night':{'min':90,'max':94}},'rain':{'probability':90,'precipitation':20},'wind':{'velocity_min':5,'velocity_max':17,'velocity_avg':10,'gust_max':30,'direction_degrees':25,'direction':'NNE','dawn':{'direction':'NW','direction_degrees':341,'gust_max':9,'velocity_max':6,'velocity_avg':5},'morning':{'direction':'NNW','direction_degrees':336,'gust_max':11,'velocity_max':8,'velocity_avg':7},'afternoon':{'direction':'NE','direction_degrees':46,'gust_max':20,'velocity_max':15,'velocity_avg':13},'night':{'direction':'NE','direction_degrees':44,'gust_max':30,'velocity_max':17,'velocity_avg':15}},'thermal_sensation':{'min':15,'max':21},'text_icon':{'icon':{'dawn':'4rn','morning':'4r','afternoon':'4r','night':'4rn','day':'4r'},'text':{'pt':'Sol com muitas nuvens e chuva','en':'Sun and rain.','es':'Sol con muchas nubes durante el d\u00eda. Per\u00edodos de nublado, con lluvia a cualquier hora.','phrase':{'reduced':'Sol com muitas nuvens durante o dia. Per\u00edodos de nublado, com chuva a qualquer hora.','morning':'Sol com muitas nuvens e chuva','afternoon':'Sol com muitas nuvens e chuva','night':'Muitas nuvens e chuva','dawn':'Muitas nuvens e chuva'}}},'temperature':{'min':15,'max':21,'dawn':{'min':15,'max':16},'morning':{'min':15,'max':18},'afternoon':{'min':18,'max':21},'night':{'min':17,'max':21}},'cloud_coverage':{'low':2637.5,'mid':0,'high':3002.5,'dawn':{'low':7066.7,'mid':0,'high':4240},'morning':{'low':2933.3,'mid':0,'high':4993.3},'afternoon':{'low':183.3,'mid':0,'high':2776.7},'night':{'low':366.7,'mid':0,'high':0}},'sun':{'sunrise':'06:58:00','sunset':'17:45:00'}},{'date':'2019-07-27','date_br':'27/07/2019','humidity':{'min':56,'max':98,'dawn':{'min':85,'max':89},'morning':{'min':62,'max':86},'afternoon':{'min':56,'max':75},'night':{'min':89,'max':98}},'rain':{'probability':80,'precipitation':10},'wind':{'velocity_min':4,'velocity_max':15,'velocity_avg':10,'gust_max':31,'direction_degrees':33,'direction':'NNE','dawn':{'direction':'N','direction_degrees':7,'gust_max':31,'velocity_max':15,'velocity_avg':14},'morning':{'direction':'WSW','direction_degrees':284,'gust_max':19,'velocity_max':10,'velocity_avg':9},'afternoon':{'direction':'ESE','direction_degrees':139,'gust_max':7,'velocity_max':8,'velocity_avg':6},'night':{'direction':'E','direction_degrees':105,'gust_max':18,'velocity_max':13,'velocity_avg':9}},'thermal_sensation':{'min':14,'max':22},'text_icon':{'icon':{'dawn':'4rn','morning':'4r','afternoon':'4r','night':'4rn','day':'4r'},'text':{'pt':'Sol com muitas nuvens e chuva','en':'Sun and rain.','es':'Sol con muchas nubes durante el d\u00eda. Per\u00edodos de nublado, con lluvia a cualquier hora.','phrase':{'reduced':'Sol com muitas nuvens durante o dia. Per\u00edodos de nublado, com chuva a qualquer hora.','morning':'Sol com muitas nuvens e chuva','afternoon':'Sol com muitas nuvens e chuva','night':'Muitas nuvens e chuva','dawn':'Muitas nuvens e chuva'}}},'temperature':{'min':14,'max':22,'dawn':{'min':15,'max':16},'morning':{'min':14,'max':16},'afternoon':{'min':18,'max':22},'night':{'min':15,'max':21}},'cloud_coverage':{'low':137.5,'mid':91.7,'high':0,'dawn':{'low':0,'mid':366.7,'high':0},'morning':{'low':0,'mid':0,'high':0},'afternoon':{'low':0,'mid':0,'high':0},'night':{'low':550,'mid':0,'high':0}},'sun':{'sunrise':'06:57:00','sunset':'17:46:00'}},{'date':'2019-07-28','date_br':'28/07/2019','humidity':{'min':69,'max':98,'dawn':{'min':92,'max':96},'morning':{'min':73,'max':91},'afternoon':{'min':69,'max':80},'night':{'min':92,'max':98}},'rain':{'probability':40,'precipitation':2},'wind':{'velocity_min':3,'velocity_max':12,'velocity_avg':7,'gust_max':16,'direction_degrees':143,'direction':'SE','dawn':{'direction':'SE','direction_degrees':155,'gust_max':13,'velocity_max':9,'velocity_avg':8},'morning':{'direction':'S','direction_degrees':181,'gust_max':11,'velocity_max':7,'velocity_avg':7},'afternoon':{'direction':'ESE','direction_degrees':129,'gust_max':12,'velocity_max':11,'velocity_avg':6},'night':{'direction':'ESE','direction_degrees':110,'gust_max':16,'velocity_max':12,'velocity_avg':9}},'thermal_sensation':{'min':15,'max':19},'text_icon':{'icon':{'dawn':'3n','morning':'3','afternoon':'2r','night':'3n','day':'3'},'text':{'pt':'Nublado','en':'Cloudy.','es':'Cielo nublado de d\u00eda y de noche. Posibilidad de llovizna.','phrase':{'reduced':'Nublado com aberturas de sol \u00e0\u00a0 tarde. Pode garoar de manh\u00e3 e \u00e0 noite.','morning':'Nublado','afternoon':'Sol com muitas nuvens','night':'Nublado com possibilidade de chuviscos','dawn':'Nublado com possibilidade de chuviscos'}}},'temperature':{'min':15,'max':19,'dawn':{'min':16,'max':16},'morning':{'min':15,'max':17},'afternoon':{'min':17,'max':19},'night':{'min':15,'max':19}},'cloud_coverage':{'low':4408.3,'mid':0,'high':0,'dawn':{'low':5766.7,'mid':0,'high':0},'morning':{'low':5600,'mid':0,'high':0},'afternoon':{'low':3133.3,'mid':0,'high':0},'night':{'low':3133.3,'mid':0,'high':0}},'sun':{'sunrise':'06:57:00','sunset':'17:46:00'}},{'date':'2019-07-29','date_br':'29/07/2019','humidity':{'min':64,'max':98,'dawn':{'min':90,'max':94},'morning':{'min':70,'max':89},'afternoon':{'min':64,'max':76},'night':{'min':91,'max':98}},'rain':{'probability':20,'precipitation':1},'wind':{'velocity_min':4,'velocity_max':13,'velocity_avg':9,'gust_max':17,'direction_degrees':29,'direction':'NNE','dawn':{'direction':'NW','direction_degrees':334,'gust_max':13,'velocity_max':9,'velocity_avg':6},'morning':{'direction':'NW','direction_degrees':336,'gust_max':15,'velocity_max':10,'velocity_avg':9},'afternoon':{'direction':'NE','direction_degrees':63,'gust_max':14,'velocity_max':11,'velocity_avg':10},'night':{'direction':'ENE','direction_degrees':63,'gust_max':17,'velocity_max':13,'velocity_avg':11}},'thermal_sensation':{'min':15,'max':23},'text_icon':{'icon':{'dawn':'3n','morning':'3','afternoon':'2r','night':'2rn','day':'2r'},'text':{'pt':'Sol com muitas nuvens','en':'Mostly cloudy.','es':'Sol con muchas nubes.','phrase':{'reduced':'Nublado pela manh\u00e3, com possibilidade de garoa. Tarde de sol com diminui\u00e7\u00e3o de nuvens. Noite com muita nebulosidade.','morning':'Nublado','afternoon':'Sol com muitas nuvens','night':'Muitas nuvens','dawn':'Nublado com possibilidade de chuviscos'}}},'temperature':{'min':15,'max':23,'dawn':{'min':17,'max':17},'morning':{'min':15,'max':18},'afternoon':{'min':19,'max':23},'night':{'min':17,'max':23}},'cloud_coverage':{'low':1695.8,'mid':0,'high':46.3,'dawn':{'low':3300,'mid':0,'high':0},'morning':{'low':1100,'mid':0,'high':0},'afternoon':{'low':916.7,'mid':0,'high':0},'night':{'low':1466.7,'mid':0,'high':185}},'sun':{'sunrise':'06:56:00','sunset':'17:47:00'}},{'date':'2019-07-30','date_br':'30/07/2019','humidity':{'min':60,'max':97,'dawn':{'min':90,'max':94},'morning':{'min':65,'max':92},'afternoon':{'min':60,'max':72},'night':{'min':90,'max':95}},'rain':{'probability':0,'precipitation':0},'wind':{'velocity_min':7,'velocity_max':12,'velocity_avg':10,'gust_max':21,'direction_degrees':32,'direction':'NNE','dawn':{'direction':'N','direction_degrees':23,'gust_max':21,'velocity_max':10,'velocity_avg':9},'morning':{'direction':'N','direction_degrees':358,'gust_max':18,'velocity_max':10,'velocity_avg':10},'afternoon':{'direction':'NNE','direction_degrees':48,'gust_max':15,'velocity_max':11,'velocity_avg':9},'night':{'direction':'ENE','direction_degrees':57,'gust_max':18,'velocity_max':12,'velocity_avg':10}},'thermal_sensation':{'min':15,'max':23},'text_icon':{'icon':{'dawn':'2n','morning':'2','afternoon':'2','night':'2n','day':'2'},'text':{'pt':'Sol com algumas nuvens','en':'Mostly sunny.','es':'Sol con algunas nubes. No llueve.','phrase':{'reduced':'Sol com algumas nuvens. N\u00e3o chove.','morning':'Sol com algumas nuvens','afternoon':'Sol com algumas nuvens','night':'Algumas nuvens','dawn':'Algumas nuvens'}}},'temperature':{'min':15,'max':23,'dawn':{'min':15,'max':18},'morning':{'min':15,'max':18},'afternoon':{'min':20,'max':23},'night':{'min':17,'max':23}},'cloud_coverage':{'low':1329.2,'mid':0,'high':138.8,'dawn':{'low':4216.7,'mid':0,'high':555},'morning':{'low':1100,'mid':0,'high':0},'afternoon':{'low':0,'mid':0,'high':0},'night':{'low':0,'mid':0,'high':0}},'sun':{'sunrise':'06:56:00','sunset':'17:47:00'}},{'date':'2019-07-31','date_br':'31/07/2019','humidity':{'min':47,'max':94,'dawn':{'min':84,'max':91},'morning':{'min':58,'max':86},'afternoon':{'min':47,'max':64},'night':{'min':54,'max':82}},'rain':{'probability':0,'precipitation':0},'wind':{'velocity_min':1,'velocity_max':12,'velocity_avg':8,'gust_max':23,'direction_degrees':350,'direction':'NNW','dawn':{'direction':'NNW','direction_degrees':346,'gust_max':20,'velocity_max':11,'velocity_avg':11},'morning':{'direction':'W','direction_degrees':296,'gust_max':18,'velocity_max':10,'velocity_avg':9},'afternoon':{'direction':'ENE','direction_degrees':77,'gust_max':7,'velocity_max':5,'velocity_avg':3},'night':{'direction':'ENE','direction_degrees':40,'gust_max':23,'velocity_max':12,'velocity_avg':9}},'thermal_sensation':{'min':14,'max':28},'text_icon':{'icon':{'dawn':'1n','morning':'1','afternoon':'1','night':'1n','day':'1'},'text':{'pt':'Sol','en':'Sunny','es':'Sol durante todo el d\u00eda sin nubes en el cielo. Noche despejada y sin nubes.','phrase':{'reduced':'Sol o dia todo sem nuvens no c\u00e9u. Noite de tempo aberto ainda sem nuvens.','morning':'Sol','afternoon':'Sol','night':'Tempo aberto','dawn':'Tempo aberto'}}},'temperature':{'min':14,'max':26,'dawn':{'min':15,'max':16},'morning':{'min':14,'max':18},'afternoon':{'min':20,'max':26},'night':{'min':18,'max':26}},'cloud_coverage':{'low':0,'mid':0,'high':0,'dawn':{'low':0,'mid':0,'high':0},'morning':{'low':0,'mid':0,'high':0},'afternoon':{'low':0,'mid':0,'high':0},'night':{'low':0,'mid':0,'high':0}},'sun':{'sunrise':'06:55:00','sunset':'17:48:00'}},{'date':'2019-08-01','date_br':'01/08/2019','humidity':{'min':31,'max':78,'dawn':{'min':51,'max':52},'morning':{'min':35,'max':51},'afternoon':{'min':31,'max':51},'night':{'min':64,'max':79}},'rain':{'probability':0,'precipitation':0},'wind':{'velocity_min':3,'velocity_max':20,'velocity_avg':13,'gust_max':31,'direction_degrees':289,'direction':'W','dawn':{'direction':'WNW','direction_degrees':301,'gust_max':28,'velocity_max':17,'velocity_avg':15},'morning':{'direction':'W','direction_degrees':287,'gust_max':32,'velocity_max':21,'velocity_avg':20},'afternoon':{'direction':'WSW','direction_degrees':264,'gust_max':29,'velocity_max':19,'velocity_avg':12},'night':{'direction':'ENE','direction_degrees':80,'gust_max':19,'velocity_max':11,'velocity_avg':7}},'thermal_sensation':{'min':16,'max':30},'text_icon':{'icon':{'dawn':'1n','morning':'1','afternoon':'1','night':'1n','day':'1'},'text':{'pt':'Sol','en':'Sunny','es':'Sol durante todo el d\u00eda sin nubes en el cielo. Noche despejada y sin nubes.','phrase':{'reduced':'Sol o dia todo sem nuvens no c\u00e9u. Noite de tempo aberto ainda sem nuvens.','morning':'Sol','afternoon':'Sol','night':'Tempo aberto','dawn':'Tempo aberto'}}},'temperature':{'min':16,'max':29,'dawn':{'min':19,'max':21},'morning':{'min':20,'max':21},'afternoon':{'min':24,'max':29},'night':{'min':16,'max':28}},'cloud_coverage':{'low':0,'mid':0,'high':0,'dawn':{'low':0,'mid':0,'high':0},'morning':{'low':0,'mid':0,'high':0},'afternoon':{'low':0,'mid':0,'high':0},'night':{'low':0,'mid':0,'high':0}},'sun':{'sunrise':'06:54:00','sunset':'17:48:00'}}]});
      observer.complete();
    });
  }

  getCityId(city) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })};
    return this.http.get(`${this.url}locale/city?name=${city.cidade}&state=${city.estadoId}&token=${this.token}`);
  }

}
