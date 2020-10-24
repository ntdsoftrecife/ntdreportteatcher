import * as React from 'react';
import { useParams } from 'react-router-dom'
import * as exerciseService from '../../../service/exercise'



export interface SelectItensProps {
    
}
 
const SelectItens: React.SFC<SelectItensProps> = () => {

    const { idExercise } = useParams<{idExercise:string}>()
    var [exerciseList, setExerciseList] = React.useState<exerciseService.TexerciseList[]>([]);
    const [load, setLoad] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>('');

    const loadListExercise = async () => {
        setLoad(true)
        const result = await exerciseService.listExercise()
        setLoad(false)
        if(result.erro) return setError(result.erro)
        setExerciseList(result.map( exercise => {
            exercise.datecreate = new Date(exercise.datecreate)
            return exercise;
        }))
    }

    React.useEffect(() => {
        loadListExercise()
    }, [])

    if(load)
        return <div className='flex-column h100-porcent center'>
            CARREGANDO...
        </div>

    if(error)
        return <div className='flex-column h100-porcent center'>
            ERRO: {error}
        </div>
    
    return <div className='no-print flex-column center flex-1 h100-porcent'>
            <div className='flex-column bg-color-smooth p20 border-radius-4 box-shadow gap5 '>
                <div className='f16 color-dark b p10'>
                    Escolha o exercício
                </div>
                <input placeholder='PESQUISAR' autoFocus={true} />
                <div className='flex-column flex-1 max-h-300 overflow bg-color-white'>
                    {
                        exerciseList
                            .sort( (a,b) => a.id > b.id ? -1 : 1 )
                            .sort( (a,b) => a.datecreate > b.datecreate ? -1 : 1 )
                            .map( exercise => {
                                return <section className='flex-column p10 left f10 pointer hover' key={exercise.id}>
                                    <div className='b color-dark f14'>{exercise.titulo}</div>
                                    <div>{exercise.Turma} {exercise.Turma_Tipo} - {exercise.Turno} - {exercise.Curso_Grau}</div>
                                    <div>{exercise.datecreate.toLocaleString()}</div>
                                </section>
                            })
                    }
                </div>
            </div>
        </div>
}
 
export default SelectItens;