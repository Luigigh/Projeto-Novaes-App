package App.Novaes.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import App.Novaes.entity.Funcionario;

public interface FuncionarioRepository extends CrudRepository<Funcionario, Long>{
	@Query("SELECT p FROM Funcionario p WHERE p.nome LIKE :nome%")
	Iterable<Funcionario> findByNome(String nome);

}
